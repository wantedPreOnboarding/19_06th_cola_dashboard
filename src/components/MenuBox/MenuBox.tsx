import React, { useState } from 'react';
import * as M from './MenuBox.styled';
import { FilterBox } from 'components/Filtering';
const MenuBox = () => {
  const [newScroll, setNewScroll] = useState<number>(0);
  const [newWidth, setNewWidth] = useState<number>(window.innerWidth);

  window.addEventListener('scroll', () => {
    setNewScroll(window.scrollX);
  });

  window.addEventListener('resize', () => {
    setNewWidth(window.innerWidth);
  });

  return (
    <M.Wrapper newWidth={newWidth + newScroll}>
      <h1>출고 요청 매핑 리스트</h1>
      <FilterBox />
    </M.Wrapper>
  );
};

export default MenuBox;
