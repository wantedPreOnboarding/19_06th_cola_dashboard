import React from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import * as M from './FilterCheckBox.styled';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import { renewalColumns } from 'redux/slices/orderSheet';

const FilterCheckBoxs = () => {
  const filters = useAppSelector(state => state.orderSheet.columns);
  const dispatch = useAppDispatch();
  const changeHandler = (checked: boolean, filterkey: string) => {
    checked
      ? dispatch(renewalColumns([...filters, filterkey]))
      : dispatch(renewalColumns(filters.filter(filter => filter !== filterkey)));
  };
  return (
    <M.WrapperBox>
      {ORDER_SHEET_KEY_MAP &&
        Object.values(ORDER_SHEET_KEY_MAP).map(filterKey => (
          <CheckboxLabel
            key={filterKey}
            filterKey={filterKey}
            checked={filters.includes(filterKey) ? true : false}
            changeHandler={changeHandler}
          />
        ))}
    </M.WrapperBox>
  );
};

export default FilterCheckBoxs;
