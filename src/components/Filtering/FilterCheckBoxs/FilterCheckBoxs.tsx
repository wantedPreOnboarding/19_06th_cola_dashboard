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
  const newValue=Object.entries(ORDER_SHEET_KEY_MAP)

  const findKey=(value:string)=>{
    const idx=newValue.findIndex(val=>val[1]===value)
    return newValue[idx][0]
  }

//검색이랑 연결된값
  const [linkedValue, setLinkedValue] = useState<string[]>(filterValues);

  const changeHandler = (checked: boolean, filterValue: string) => {
    checked
      ? dispatch(renewalColumns([...filters, findKey(filterValue)]))
      : dispatch(renewalColumns(filters.filter(filter => filter !== findKey(filterValue))));
  };

  const updateSearch = (updateResult: result[]): void => {
    setLinkedValue([...updateResult.map(r => r.value)]);
  };

  return (
    <M.WrapperBox>
      <Search data={filterValues} updateResult={updateSearch} />
      {ORDER_SHEET_KEY_MAP &&
        linkedValue.map(filterValue => (
          <CheckboxLabel
            key={filterValue}
            filterValue={filterValue}
            checked={filters.includes(findKey(filterValue)) ? true : false}
            changeHandler={changeHandler}
          />
        ))}
    </M.WrapperBox>
  );
};

export default FilterCheckBoxs;
