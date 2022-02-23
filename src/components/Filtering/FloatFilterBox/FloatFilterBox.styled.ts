import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBox = styled(Box)`
  width: 250px;
  height: auto;
  background-color: white;
  position: fixed;
  bottom: 450px;
  right: 30px;
  z-index: 1000;
`;

export const Overlay = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
