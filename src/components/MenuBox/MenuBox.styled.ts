import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export interface MenuProps {
  newWidth: number;
}

export const Wrapper = styled(Box)<MenuProps>`
  width: ${props => props.newWidth && props.newWidth}px;
  min-width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px 30px 20px 10px;
  justify-content: space-between;
  h1 {
    font-size: 20px;
  }
`;
