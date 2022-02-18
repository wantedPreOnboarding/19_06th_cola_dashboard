import React, { useState } from 'react';
import FloatingBtn from '../FloatingBtn/FloatingBtn';
import FilterCheckBoxs from '../FilterCheckBoxs/FilterCheckBoxs';
import * as M from './FloatFilterBox.styled';
const FloatFilterBox = () => {
  const [clickedBar, setClickedBar] = useState(false);
  const filterBarHandler = () => {
    setClickedBar(!clickedBar);
  };
  return (
    <M.StyledBox>
      <FloatingBtn filterBarHandler={filterBarHandler} />
      {clickedBar && <FilterCheckBoxs />}
    </M.StyledBox>
  );
};

export default FloatFilterBox;
