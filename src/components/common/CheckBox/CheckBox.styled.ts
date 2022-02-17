import styled from 'styled-components';
import { CheckBoxLabelProps } from './CheckBox.type';

export const Wrapper = styled.section`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Label = styled.label<CheckBoxLabelProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props =>
    props.checked ? ` ${props.theme.colors.blue}` : ` ${props.theme.colors.gray}`};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
`;
