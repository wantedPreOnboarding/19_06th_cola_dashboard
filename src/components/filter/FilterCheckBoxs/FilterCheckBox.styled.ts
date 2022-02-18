import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const WrapperBox = styled(Box)(
  ({ theme }) => `
    margin-top:5px;
    border: 2px solid ${theme.palette.primary.main};
    background:white;
    border-radius:5px;
    height:300px;
    overflow-y:auto;
    overflow-x:hidden;
    padding:10px 
    box-sizing:border-box;
    `,
);
