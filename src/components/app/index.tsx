import { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CancelIcon from '@material-ui/icons/Cancel';

import Item from '../item'
import Cart from '../cart'

import { useProducts } from '../../hooks/products';

import { Wrapper, Items, Button, CloseIconWrapper } from './index.styles';
import { CartItemType } from '../../types/CartItemType';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { isLoading, error, products, cartItems } = useProducts();
  
  const getTotalItems = (items: CartItemType[]) => {
    return items?.reduce((accum: number, item) => {
      return item.amount ? accum += item.amount : 0
    }, 0);
  } 

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong...</div>

  return (
      <Wrapper>
        <Drawer
          anchor='right'
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        >
          <CloseIconWrapper onClick={() => setIsCartOpen(false)}>
            <CancelIcon />
          </CloseIconWrapper>
          <Cart
            cartItems={cartItems}
          />
        </Drawer>
        <Button onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCartIcon />
          </Badge>
        </Button>
        <Items>
          {products?.map((item: CartItemType) => (
            <div key={item.id}>
              <Item item={item} />
            </div>
          ))}
        </Items>
      </Wrapper>
  );
}

export default App;
