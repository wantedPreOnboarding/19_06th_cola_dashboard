import React, { useState } from 'react';
import FloatingBtn from '../FloatBtn/FloatBtn';
import FilterCheckBoxs from '../FilterCheckBoxs/FilterCheckBoxs';
import * as M from './FloatFilterBox.styled';
const FloatFilterBox = () => {
  const [clickedBar, setClickedBar] = useState(false);
  const filterBarHandler = () => {
    setClickedBar(!clickedBar);
  };
  return (
    <>
      {clickedBar && <M.Overlay onClick={filterBarHandler} />}
      <M.StyledBox>
        {clickedBar && <FilterCheckBoxs />}
        <FloatingBtn filterBarHandler={filterBarHandler} />
      </M.StyledBox>
    </>
  );
};

export default FloatFilterBox;
