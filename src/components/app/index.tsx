import { useState } from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Item from '../item'
import Cart from '../cart'

import { getProducts, PRODUCTS_QUERY } from '../../utils/productsQuery';
import { Wrapper, Items, Button } from './index.styles';
import { CartItemType } from '../../types/CartItemType';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(PRODUCTS_QUERY, getProducts);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((accum: number, item) => accum += item.amount, 0)

  const handleAddToCart = (item: CartItemType) => {

  };

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Button onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </Button>
      <Items>
        {data?.map(item => (
          <div key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </Items>
    </Wrapper>
  );
}

export default App;
