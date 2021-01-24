import { useState } from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { getProducts, PRODUCTS_QUERY } from '../../utils/productsQuery';
import { Wrapper } from './index.styles';
import { CartItemType } from '../../types/CartItemType';

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(PRODUCTS_QUERY, getProducts);

  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong...</div>

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
