import React, { useEffect, useState } from 'react';
import * as S from './FilterCheckBoxs.styled';
import { CheckBox } from 'components/common';

const FilterCheckBoxs = () => {
  const [checkedInputs, setCheckedInputs] = useState<string[]>([]);

  const changeHandler = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      setCheckedInputs(checkedInputs.filter(el => el !== id));
    }
  };

  return (
    <S.Wrapper>
      <S.SortText>SORT BY:</S.SortText>
      <S.CheckFilter>
        <span>데이터 출처1</span>
        <CheckBox id="check1" changeHandler={changeHandler} checkedInputs={checkedInputs} />
      </S.CheckFilter>
      <S.CheckFilter>
        <span>데이터 출처2</span>
        <CheckBox id="check2" changeHandler={changeHandler} checkedInputs={checkedInputs} />
      </S.CheckFilter>
      <S.CheckFilter>
        <span>데이터 출처3</span>
        <CheckBox id="check3" changeHandler={changeHandler} checkedInputs={checkedInputs} />
      </S.CheckFilter>
    </S.Wrapper>
  );
};

export default FilterCheckBoxs;
