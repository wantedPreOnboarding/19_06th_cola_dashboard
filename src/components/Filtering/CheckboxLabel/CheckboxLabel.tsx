import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as M from './CheckBoxLabel.styled';
import { CheckBoxLabelProps } from './CheckBoxLabel.type';
const CheckboxLabel = ({ filterKey, checked, changeHandler }: CheckBoxLabelProps) => {
  return (
    <M.StyledFormGroup>
      <FormControlLabel
        sx={{
          height: '20px',
        }}
        control={
          <Checkbox
            id={filterKey}
            checked={checked}
            sx={{
              color: '#1157C9',
              '&.Mui-checked': {
                color: '#1157C9',
              },
            }}
            onChange={e => {
              const checked = e.target.checked;
              changeHandler(checked, filterKey);
            }}
          />
        }
        label={filterKey}
      />
    </M.StyledFormGroup>
  );
};
export default CheckboxLabel;
