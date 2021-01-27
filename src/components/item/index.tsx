import { FC } from 'react';

import { useProducts } from '../../hooks/products';

import { CartItemType } from '../../types/CartItemType';
import { Wrapper, Details, Image, Button, Price } from './index.styles';

type Props = {
  item: CartItemType;
}

const Item: FC<Props> = ({ item }) => {
  const { addToCart } = useProducts();

  return (
    <Wrapper>
      <Image src={item.image} alt={item.title} />
      <Details>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </Details>
      <Price>
        <h3>${(item.price).toFixed(2)}</h3>
      </Price>
      <Button onClick={() => addToCart(item)}>
        Add to cart
      </Button>
    </Wrapper>
  )
}

export default Item;
