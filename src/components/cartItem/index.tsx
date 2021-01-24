import Button from '@material-ui/core/Button'
import { FC } from 'react';

import { Wrapper } from './index.styles';
import { CartItemType } from '../../types/CartItemType';

type Props = {
  item: CartItemType;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  )
}

export default Cart
