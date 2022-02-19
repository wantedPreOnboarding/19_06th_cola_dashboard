import React, { useState } from 'react';
import FilterBar from '../FilterBar/FilterBar';
import * as M from './FilterBox.styled';
import FilterCheckBoxs from '../FilterCheckBoxs/FilterCheckBoxs';

const FilterBox = () => {
  const [clickedBar, setClickedBar] = useState(false);

  const filterBarHandler = () => {
    setClickedBar(!clickedBar);
  };

  return (
    <M.StyledBox>
      <FilterBar filterBarHandler={filterBarHandler} />
      {clickedBar && <FilterCheckBoxs />}
    </M.StyledBox>
  );
};

export default FilterBox;
