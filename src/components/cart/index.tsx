import { FC } from 'react';

import CartItem from '../cartItem'

import { Wrapper } from './index.styles';
import { CartItemType } from '../../types/CartItemType';

type Props = {
  cartItems: CartItemType[];
}

const Cart: FC<Props> = ({ cartItems }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {
        cartItems.length === 0 && <p>No items in cart</p>
      }

      {
        cartItems?.map(item => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))
      }
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart
