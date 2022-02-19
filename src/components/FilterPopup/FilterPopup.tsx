import React, { useState } from 'react';
import { Search } from 'components/common';
import { result } from 'utils/filterSearch/filterSearch.type';
import { Paper } from '@mui/material';
import * as M from './FilterPopup.style';
import FilterPopupProps from './FilterPopup.type';

const FilterPopup = (rowTitle: FilterPopupProps) => {
  const [printList, setPrintList] = useState<[]>([]);

  const updateSearch = (updateResult: result[]): void => {
    console.log(updateResult);
  };
  return (
    <M.Wrapper>
      <Paper elevation={3} sx={{ textAlign: 'center', padding: '5px' }}>
        <Search data={['abc', 'bbc']} updateResult={updateSearch} />
      </Paper>
    </M.Wrapper>
  );
};

export default FilterPopup;
