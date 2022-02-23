import { styled } from '@mui/material/styles';
import { TextField, InputBase, FormControl, Box } from '@mui/material';

export const SearchBar = styled(InputBase)`
  width: 100%;
  padding: 0 15px;
  font-size: 16px;
  color: #252525;
`;

export const FormWrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  border: none;
  border-radius: 6px;
  background-color: #e7eefa;
`;
