import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const Wrapper = styled.div`
  padding: 15px;
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

const CloseIconWrapper = styled.div`
  right: 10px;
  position: relative;
  top: 10px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`

export {
  Wrapper,
  Items,
  Button,
  CloseIconWrapper
}