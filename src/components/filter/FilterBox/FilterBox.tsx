import React, { useState } from 'react';
import { FilterBar, FilterCheckBoxs } from '..';
import * as S from './FilterBox.styled';

const FilterBox = () => {
  const [clickedBar, setClickedBar] = useState(false);
  const filterBarHandler = () => {
    setClickedBar(!clickedBar);
  };

  return (
    <S.Wrapper>
      <FilterBar filterBarHandler={filterBarHandler} />
      {clickedBar && <FilterCheckBoxs />}
    </S.Wrapper>
  );
};

export default FilterBox;
