import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as M from './CheckBoxLabels.styled';
import { FilterProps } from '../FilterProps.type';
const CheckboxLabels = ({ id, changeHandler, checkedInputs }: FilterProps) => {
  return (
    <M.StyledFormGroup>
      <FormControlLabel
        sx={{
          height: '25px',
        }}
        control={
          <Checkbox
            id={id}
            onChange={e => {
              const checked = e.target.checked;
              changeHandler(checked, id);
            }}
            checked={checkedInputs.includes(id) ? true : false}
          />
        }
        label="Label"
      />
    </M.StyledFormGroup>
  );
};
export default CheckboxLabels;
