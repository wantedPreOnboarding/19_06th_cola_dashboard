import React from 'react';
import * as S from './FloatBtn.styled';
import FloatBtnProps from './FloatBtn.type';
const FloatBtn = ({ filterBarHandler }: FloatBtnProps) => {
  return (
    <S.Wrapper onClick={filterBarHandler}>
      <S.FloatIcon src={`${process.env.REACT_APP_ASSET_PATH}/filterWhite.svg`} />
    </S.Wrapper>
  );
};

export default FloatBtn;
