import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { StyledFab } from './FloatingBtn.styled';
import { FloatingBtnProps } from './FloatingBtn.type';
const FloatingBtn = ({ filterBarHandler }: FloatingBtnProps) => {
  return (
    <StyledFab color="primary" aria-label="add" onClick={filterBarHandler}>
      <FilterListIcon />
    </StyledFab>
  );
};

export default FloatingBtn;
