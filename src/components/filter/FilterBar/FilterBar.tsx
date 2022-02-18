import * as React from 'react';
import Stack from '@mui/material/Stack';
import FilterListIcon from '@mui/icons-material/FilterList';
import * as M from './FilterBar.styled';
import { FilterBarProps } from './FilterBar.type';
const FilterBar = ({ filterBarHandler }: FilterBarProps) => {
  return (
    <Stack spacing={2} direction="row">
      <M.StyledBtn variant="contained" onClick={filterBarHandler}>
        <FilterListIcon /> <span>Filter</span>
      </M.StyledBtn>
    </Stack>
  );
};

export default FilterBar;
