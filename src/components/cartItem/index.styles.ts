import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  border-bottom: 1px solid lightblue;
  padding: 20px 0;
  gap: 20px;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const PricesContainer = styled(Container)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ItemInformation = styled.div`
  display: grid;
  gap: 10px;
`;

const Image = styled.img`
  max-width: 80px;
  object-fit: contain;
`;

const Title = styled.h3`
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export {
  Wrapper,
  Container,
  Image,
  ItemInformation,
  Title,
  PricesContainer
}