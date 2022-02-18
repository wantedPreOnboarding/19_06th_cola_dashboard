import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
export const StyledFormGroup = styled(FormGroup)(
  ({ theme }) => `
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    width: 250px;
    height: 40px;
    margin:auto;
    
  `,
);
