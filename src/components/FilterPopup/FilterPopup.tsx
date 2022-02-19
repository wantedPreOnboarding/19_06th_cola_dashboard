import React, { useState, useEffect, ReactElement } from 'react';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import { Search } from 'components/common';
import { renewalIds } from 'redux/slices/orderSheet';
import { result } from 'utils/filterSearch/filterSearch.type';
import { FilterPopupProps } from './FilterPopup.type';
import * as M from './FilterPopup.style';
import { Paper } from '@mui/material';

const FilterPopup = ({ rowTitle }: FilterPopupProps): ReactElement => {
  const { data } = useGetOrderSheetQuery(null);
  const filters = useAppSelector(state => state.orderSheet.ids);
  const dispatch = useAppDispatch();

  const [rowData, setRowData] = useState<string[]>([]);
  const [resultId, setResultId] = useState<number[]>([]);

  const updateSearch = (updateResult: result[]): void => {
    setResultId(updateResult.map(result => result.id));
  };

  useEffect(() => {
    if (data) {
      setRowData(data.map(data => String(data[rowTitle])));
    }
  }, [data]);

  useEffect(() => {
    dispatch(renewalIds([...resultId]));
  }, [resultId]);

  return (
    <M.Wrapper>
      <Paper elevation={3} sx={{ textAlign: 'center', padding: '5px', bgColor: 'white' }}>
        <Search data={rowData} updateResult={updateSearch} />
      </Paper>
    </M.Wrapper>
  );
};

export default FilterPopup;
