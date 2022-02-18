import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as M from './CheckBoxLabel.styled';

const CheckboxLabel = ({ filterKey }: { filterKey: string }) => {
  return (
    <M.StyledFormGroup>
      <FormControlLabel
        sx={{
          height: '20px',
        }}
        control={<Checkbox id={filterKey} checked />}
        label={filterKey}
      />
    </M.StyledFormGroup>
  );
};
export default CheckboxLabel;
