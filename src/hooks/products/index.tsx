import React, {
  createContext,
  FC,
  useContext,
  useReducer,
} from 'react';
import { useQuery } from 'react-query';
import { CartItemType } from '../../types/CartItemType';

import { getProducts, PRODUCTS_QUERY } from '../../utils/productsQuery';

enum Types {
  SET_PRODUCTS = 'SET_PRODUCTS',
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type Application = {
  products: [];
  cartItems: []
}

type Action = {
  type: Types;
  value: CartItemType[] | CartItemType | number | undefined;
}

type Context = {
  application: Application;
  isLoading: boolean;
  error: unknown;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const ProductsContext = createContext<Context>({
  application: { products: [], cartItems: [] },
  isLoading: false, 
  error: '', 
  addToCart: () => {}, 
  removeFromCart: () => {}
});

const reducer = (state: any, action: Action ) => {
  switch (action.type) {
    case Types.SET_PRODUCTS:
      return {...state, products: action.value}
    case Types.ADD_TO_CART:
      const isItemInCart = state.cartItems.find((elem: CartItemType) => elem.id === (action.value as CartItemType).id);

      if (isItemInCart) {
        return {...state, cartItems: state.cartItems.map((elem: CartItemType) =>
          elem.id === (action.value as CartItemType).id
            ? { ...elem, amount: elem.amount + 1 }
            : elem,
        )}
      }

      return {...state, cartItems: [...state.cartItems, { ...(action.value as CartItemType), amount: 1 }] };
    case Types.REMOVE_FROM_CART:
      const newCartItems = state.cartItems.reduce((accum: CartItemType[], item: CartItemType) => {
        if (item.id === action.value) {
          if (item.amount === 1) return accum;
          return [...accum, { ...item, amount: item.amount - 1 }];
        } else {
          return [...accum, item];
        }
      }, []);

      return {...state, cartItems: newCartItems}
    default:
      return state;
  }
};

const useProducts = () => {
  const { application, isLoading, error, addToCart, removeFromCart } = useContext<Context>(ProductsContext);

  return { ...application, addToCart, removeFromCart, isLoading, error };
};

const ProductsProvider: FC = ({ children }) => {
  const { data, isLoading, error } = useQuery(PRODUCTS_QUERY, getProducts);
  const [state, dispatch] = useReducer(reducer, { products: data, cartItems: [] });

  React.useEffect(() => {
    dispatch({
      type: Types.SET_PRODUCTS,
      value: data
    })
  }, [data, dispatch])

  const addToCart = (item: CartItemType) => dispatch({ type: Types.ADD_TO_CART, value: item });

  const removeFromCart = (id: number) => dispatch({ type: Types.REMOVE_FROM_CART, value: id });

  return (
    <ProductsContext.Provider
      value={{ application: state, isLoading, error, addToCart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, ProductsProvider };
