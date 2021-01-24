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
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  height: 100%;
`
const Button = styled.button`
  border-radius: 0 0 20px 20px;
  color: rgba(0, 0, 0, 0.87);
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`
export {
  Wrapper,
  Image,
  Details,
  Button
}