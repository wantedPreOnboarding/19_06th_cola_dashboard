import { styled } from '@mui/material';
import { TableRow } from '@mui/material';

export const MUITableCellInnerContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 100%;
  > span {
    text-align: center;
    flex-grow: 1;
  }
`;

export const MUITableRow = styled(TableRow)`
  height: 43px;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
`;
