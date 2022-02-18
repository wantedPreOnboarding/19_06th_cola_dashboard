import React from 'react';
import * as M from './FilterCheckBox.styled';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
const FilterCheckBoxs = () => {
  return (
    <M.WrapperBox>
      {ORDER_SHEET_KEY_MAP &&
        Object.values(ORDER_SHEET_KEY_MAP).map(filterKey => (
          <CheckboxLabel key={filterKey} filterKey={filterKey} />
        ))}
    </M.WrapperBox>
  );
};

export default FilterCheckBoxs;
