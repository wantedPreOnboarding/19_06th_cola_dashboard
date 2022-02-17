import React, { useState } from 'react';
import { FloatBtn, FilterCheckBoxs } from '..';
import * as S from './FloatFilterBox.styled';

const FloatFilterBox = () => {
  const [clickedBar, setClickedBar] = useState(false);
  const filterBarHandler = () => {
    setClickedBar(!clickedBar);
  };

  return (
    <S.Wrapper>
      <FloatBtn filterBarHandler={filterBarHandler} />
      <div style={{ position: 'fixed', bottom: '120px', right: '50px', height: 'auto' }}>
        {clickedBar && <FilterCheckBoxs />}
      </div>
    </S.Wrapper>
  );
};

export default FloatFilterBox;
