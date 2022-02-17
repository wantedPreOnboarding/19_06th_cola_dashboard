import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import * as S from './BackDrop.styled';
import BackDropProps from './BackDrop.type';

const BackDrop = ({ className, onClick }: SCProps<BackDropProps>): ReactElement => (
  <S.BackDrop className={className} onClick={onClick} />
);
export default BackDrop;
