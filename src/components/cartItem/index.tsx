import Button from '@material-ui/core/Button'
import { FC } from 'react';

import { Wrapper, Container, Image } from './index.styles';
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
        <Container>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </Container>
        <Container>
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
        </Container>
      </div>
      <Image src={item.image} alt={item.title} />
    </Wrapper>
  )
}

export default Cart
