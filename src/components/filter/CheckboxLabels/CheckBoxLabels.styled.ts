import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
export const StyledFormGroup = styled(FormGroup)(
  ({ theme }) => `
    border:2px solid ${theme.palette.primary.main};
    box-shadow: ${theme.shadows[3]};
    border-radius: ${theme.shape.borderRadius}px;
    padding: ${theme.spacing(2)};
  width: 250px;
    height:auto;
  
  `,
);
