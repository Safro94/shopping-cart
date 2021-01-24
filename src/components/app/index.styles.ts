import styled from 'styled-components';

const Wrapper = styled.div`
`
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`

export {
  Wrapper,
  Items
}