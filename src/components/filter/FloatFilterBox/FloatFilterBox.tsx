import React, { useState } from 'react';
import CheckboxLabels from '../CheckboxLabels/CheckboxLabels';
import FloatingBtn from '../FloatingBtn/FloatingBtn';
import * as M from './FloatFilterBox.styled';
import { FilterProps } from '../FilterProps.type';

const FloatFilterBox = ({ id, changeHandler, checkedInputs }: FilterProps) => {
  const [clickedBar, setClickedBar] = useState(false);
  const filterBarHandler = () => {
    setClickedBar(!clickedBar);
  };
  return (
    <M.StyledBox>
      <FloatingBtn filterBarHandler={filterBarHandler} />
      {clickedBar && (
        <CheckboxLabels id={id} changeHandler={changeHandler} checkedInputs={checkedInputs} />
      )}
    </M.StyledBox>
  );
};

export default FloatFilterBox;
