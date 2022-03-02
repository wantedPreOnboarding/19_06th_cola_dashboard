import React, { useState } from 'react';
import { Search } from 'components/common';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import * as M from './FilterCheckBox.styled';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import { renewalColumns } from 'redux/slices/orderSheet';
import { result } from 'utils/filterSearch/filterSearch.type';
import { Order } from 'redux/services/orderSheet.type';
const FilterCheckBoxs = () => {
  const dispatch = useAppDispatch();

  //체크박스랑 연결된값
  const filters = useAppSelector(state => state.orderSheet.columns);
  const orderDatas = Object.entries(ORDER_SHEET_KEY_MAP) as [keyof Order,string][];

//검색이랑 연결된값
  const [linkedValue, setLinkedValue] = useState(filters);

  const changeHandler = (checked: boolean, filterKey: keyof Order) => {
    checked
      ? dispatch(renewalColumns([...filters, filterKey]))
      : dispatch(renewalColumns(filters.filter(filter => filter !== filterKey)));
  };

  const updateSearch = (updateResult: result[]): void => {
    setLinkedValue(updateResult.map(r => r.key));
  };


  return (
    <M.WrapperBox>
      <Search datas={orderDatas} updateResult={updateSearch} />
        {filters&& linkedValue.map(key=>{
          const filterValue= ORDER_SHEET_KEY_MAP[key];
          return(
          <CheckboxLabel
            key={key}
            filterKey={key}
            filterValue={filterValue}
            checked={filters.includes(key) ? true : false}
            changeHandler={changeHandler}
          />)
        })}
    </M.WrapperBox>
  );
};

export default FilterCheckBoxs;
