import React from 'react';
import * as S from './FilterBar.styled';
import { FilterBarProps } from './FilterBar.type';
const FilterBar = ({ filterBarHandler }: FilterBarProps) => {
  return (
    <S.Wrapper onClick={filterBarHandler}>
      <S.FilterIcon src={`${process.env.REACT_APP_ASSET_PATH}/filterBlue.svg`} />
      Filter
    </S.Wrapper>
  );
};

export default FilterBar;
