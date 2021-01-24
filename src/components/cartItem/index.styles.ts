import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  max-width: 80px;
  object-fit: contain;
  margin-left: 40px;
`;

export {
  Wrapper,
  Container,
  Image
}