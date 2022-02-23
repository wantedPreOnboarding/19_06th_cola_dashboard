import React, { useState } from 'react';
import { Search } from 'components/common';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import * as M from './FilterCheckBox.styled';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import { renewalColumns } from 'redux/slices/orderSheet';
import { result } from 'utils/filterSearch/filterSearch.type';
const FilterCheckBoxs = () => {
  const dispatch = useAppDispatch();

  //체크박스랑 연결된값
  const filters = useAppSelector(state => state.orderSheet.columns);
  //기초값
  const filterValues = Object.values(ORDER_SHEET_KEY_MAP);
  //검색이랑 연결된값
  const [linkedValue, setLinkedValue] = useState<string[]>(filterValues);

  const changeHandler = (checked: boolean, filterkey: string) => {
    checked
      ? dispatch(renewalColumns([...filters, filterkey]))
      : dispatch(renewalColumns(filters.filter(filter => filter !== filterkey)));
  };

  const updateSearch = (updateResult: result[]): void => {
    setLinkedValue([...updateResult.map(r => r.value)]);
  };

  return (
    <M.WrapperBox>
      <Search data={filterValues} updateResult={updateSearch} />
      {ORDER_SHEET_KEY_MAP &&
        linkedValue.map(filterKey => (
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
