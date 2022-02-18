import * as M from './BackDrop.styled';
import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import BackDropProps from './BackDrop.type';

const BackDrop = ({ children, onClick }: SCProps<BackDropProps>): ReactElement => {
  return (
    <M.BackDrop open={true} onClick={onClick}>
      {children}
    </M.BackDrop>
  );
};

export default BackDrop;
