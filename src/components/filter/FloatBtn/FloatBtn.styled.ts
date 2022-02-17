import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  box-shadow: 2.5px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FloatIcon = styled.img`
  margin-top: 5px;
  width: 35px;
  height: 35px;
  stroke: white;
`;
