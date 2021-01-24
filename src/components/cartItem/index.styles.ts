import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding: 20px 0;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const ItemInformation = styled.div`
  display: grid;
  gap: 10px;
`;

const Image = styled.img`
  max-width: 80px;
  object-fit: contain;
  margin-left: 40px;
`;

export {
  Wrapper,
  Container,
  Image,
  ItemInformation
}