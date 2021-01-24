import { CartItemType } from '../types/CartItemType';

const PRODUCTS_QUERY = 'products'

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

export {
  getProducts,
  PRODUCTS_QUERY
};