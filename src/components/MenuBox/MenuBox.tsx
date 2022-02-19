import React from 'react';
import * as M from './MenuBox.styled';
import { FilterBox } from 'components/Filtering';
const MenuBox = () => {
  return (
    <M.Wrapper>
      <FilterBox />
    </M.Wrapper>
  );
};

export default MenuBox;
