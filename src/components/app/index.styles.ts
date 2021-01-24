import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const Wrapper = styled.div`
  margin: 40px;
`
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`

const Button = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`
export {
  Wrapper,
  Items,
  Button
}