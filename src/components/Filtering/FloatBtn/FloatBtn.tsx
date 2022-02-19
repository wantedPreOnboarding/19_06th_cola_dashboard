import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { StyledFab } from './FloatBtn.styled';
import { FloatBtnProps } from './FloatBtn.type';
const FloatBtn = ({ filterBarHandler }: FloatBtnProps) => {
  return (
    <StyledFab color="primary" aria-label="add" onClick={filterBarHandler}>
      <FilterListIcon />
    </StyledFab>
  );
};

export default FloatBtn;
