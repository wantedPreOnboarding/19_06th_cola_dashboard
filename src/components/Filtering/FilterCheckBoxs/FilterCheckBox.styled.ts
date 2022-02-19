import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const WrapperBox = styled(Box)(
  ({ theme }) => `
    margin-top:10px;
    border: 2px solid ${theme.palette.primary.main};
    background:white;
    border-radius:5px;
    width:250px;
    height:300px;
    overflow-y:auto;
    overflow-x:hidden;
    padding: 15px 10px 10px 10px;
    box-sizing:border-box;
    position:absolute;
    `,
);
