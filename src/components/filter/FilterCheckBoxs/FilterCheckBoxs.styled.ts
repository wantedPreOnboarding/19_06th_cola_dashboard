import styled from 'styled-components';
import { FilterCheckBoxProps } from './FilterCheckBoxs.type';
export const Wrapper = styled.section`
  width: 250px;
  height: auto;
  margin-top: 10px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all 0.3s ease-in-out;
`;
export const SortText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  color: ${({ theme }) => theme.colors.blue};
  margin-left: 12px;
`;

export const CheckFilter = styled.div`
  margin: 5px auto;
  width: 230px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.sky};
  }
`;
