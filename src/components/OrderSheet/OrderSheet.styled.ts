import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const MUIContainer = styled(TableContainer)`
  height: calc(100vh - 64px);
  overflow: auto;
  white-space: nowrap;
  hr {
    width: 2px;
    display: inline-block;
    margin: 0 0.5rem;
    min-height: 20px;
  }

  tr > *:nth-child(2) hr {
    margin-left: 0;
  }
`;

export const MUITableCell = styled(TableCell)``;
