import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  padding: 12px 15px;
  background: ${({ theme }) => theme.colors.blue};
`;

export const Title = styled.h1`
  font-size: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.strong};
`;
