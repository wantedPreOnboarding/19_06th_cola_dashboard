import React from 'react';
import * as S from './FloatBtn.styled';
import FloatBtnProps from './FloatBtn.type';
const FloatBtn = ({ clickHandler }: FloatBtnProps) => {
  return (
    <S.Wrapper onClick={clickHandler}>
      <S.FloatIcon src={`${process.env.REACT_APP_ASSET_PATH}/filter.svg`} />
    </S.Wrapper>
  );
};

export default FloatBtn;
