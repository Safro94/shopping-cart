import React, {
  createContext,
  useContext,
  useReducer,
} from 'react';
import { useQuery } from 'react-query';

import { getProducts, PRODUCTS_QUERY } from '../../utils/productsQuery';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const ProductsContext = createContext();

const reducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_TO_CART:
      const isItemInCart = state.find((elem) => elem.id === action.value.id);

      if (isItemInCart) {
        return state.map((elem) =>
          elem.id === action.value.id
            ? { ...elem, amount: elem.amount + 1 }
            : elem,
        )
      }

      return [...state, { ...action.value, amount: 1 }];;
    case REMOVE_FROM_CART:
      return state.products.reduce((accum, item) => {
        if (item.id === action.value) {
          if (item.amount === 1) return accum;
          return [...accum, { ...item, amount: item.amount - 1 }];
        } else {
          return [...accum, item];
        }
      }, []);
    default:
      return state;
  }
};

const useProducts = () => {
  const { products, cartItems, isLoading, error, addToCart, removeFromCart } = useContext(ProductsContext);

  return { products, cartItems, addToCart, removeFromCart, isLoading, error };
};

const ProductsProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery(PRODUCTS_QUERY, getProducts);
  const [cartItems, dispatch] = useReducer(reducer, []);

  const addToCart = (item) => dispatch({ type: ADD_TO_CART, value: item });

  const removeFromCart = (id) => dispatch({ type: REMOVE_FROM_CART, value: id });

  return (
    <ProductsContext.Provider
      value={{ products: data, cartItems, isLoading, error, addToCart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, ProductsProvider };
