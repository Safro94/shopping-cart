import React, {
  createContext,
  useContext,
  useReducer,
} from 'react';
import { useQuery } from 'react-query';

import { getProducts, PRODUCTS_QUERY } from '../../utils/productsQuery';

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const ProductsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.value}
    case ADD_TO_CART:
      const isItemInCart = state.cartItems.find((elem) => elem.id === action.value.id);

      if (isItemInCart) {
        return {...state, cartItems: state.cartItems.map((elem) =>
          elem.id === action.value.id
            ? { ...elem, amount: elem.amount + 1 }
            : elem,
        )}
      }

      return {...state, cartItems: [...state.cartItems, { ...action.value, amount: 1 }] };
    case REMOVE_FROM_CART:
      const newCartItems = state.cartItems.reduce((accum, item) => {
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
  const { application, isLoading, error, addToCart, removeFromCart } = useContext(ProductsContext);

  return { ...application, addToCart, removeFromCart, isLoading, error };
};

const ProductsProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery(PRODUCTS_QUERY, getProducts);
  const [state, dispatch] = useReducer(reducer, { products: data, cartItems: [] });

  React.useEffect(() => {
    dispatch({
      type: SET_PRODUCTS,
      value: data
    })
  }, [data, dispatch])

  const addToCart = (item) => dispatch({ type: ADD_TO_CART, value: item });

  const removeFromCart = (id) => dispatch({ type: REMOVE_FROM_CART, value: id });

  return (
    <ProductsContext.Provider
      value={{ application: state, isLoading, error, addToCart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, ProductsProvider };
