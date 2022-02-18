import { styled } from '@mui/material/styles';
import { Backdrop } from '@mui/material';

export const BackDrop = styled(Backdrop)`
  position: 'absolute';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: '#000';
  opacity: 0.5;
  cursor: 'pointer';
`;
