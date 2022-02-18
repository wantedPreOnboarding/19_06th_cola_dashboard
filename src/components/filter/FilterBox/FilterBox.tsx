import React, { useState } from 'react';
import CheckboxLabels from '../CheckboxLabels/CheckboxLabels';
import FilterBar from '../FilterBar/FilterBar';
import * as M from './FilterBox.styled';
import { FilterProps } from '../FilterProps.type';

const FilterBox = ({ id, changeHandler, checkedInputs }: FilterProps) => {
  const [clickedBar, setClickedBar] = useState(false);
  const filterBarHandler = () => {
    setClickedBar(!clickedBar);
  };
  return (
    <M.StyledBox>
      <FilterBar filterBarHandler={filterBarHandler} />
      {clickedBar && (
        <CheckboxLabels id={id} changeHandler={changeHandler} checkedInputs={checkedInputs} />
      )}
    </M.StyledBox>
  );
};

export default FilterBox;
