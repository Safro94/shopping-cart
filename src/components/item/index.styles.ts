import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
`

const Image = styled.img`
  max-height: 250px;
  object-fit: contain;
  border-radius: 0 0 20px 20px;
`

const Details = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  padding: 1rem;
  height: 100%;
`

const Price = styled.div`
  padding: 1rem;
`

const Button = styled.button`
  border-radius: 0 0 20px 20px;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;

  &:hover {
    background: lightblue;
    color: white;
  }
`
export {
  Wrapper,
  Image,
  Details,
  Button,
  Price
}