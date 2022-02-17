import React from 'react';
import * as S from './CheckBox.styled';
import { CheckBoxProps } from './CheckBox.type';

const CheckBox = ({ id, checkedInputs, changeHandler }: CheckBoxProps) => {
  return (
    <S.Wrapper>
      <S.CheckBox
        checked={checkedInputs.includes(id) ? true : false}
        id={id}
        type="checkbox"
        onChange={e => {
          const checked = e.target.checked;
          changeHandler(checked, id);
        }}
      ></S.CheckBox>

      <S.Label htmlFor={id} checked={checkedInputs.includes(id) ? true : false}>
        <img
          src={`${process.env.REACT_APP_ASSET_PATH}/checkSign.svg`}
          style={{
            visibility: checkedInputs.includes(id) ? 'visible' : 'hidden',
            width: '16px',
            height: '16px',
            margin: 'auto',
          }}
        />
      </S.Label>
    </S.Wrapper>
  );
};

export default CheckBox;
