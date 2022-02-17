import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 250px;
  height: 40px;
  background: ${({ theme }) => theme.colors.sky};
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  font-size: ${({ theme }) => theme.fontSize.l};
  transition: all 0.5s ease-in-out;
  &:hover {
    filter: brightness(90%);
  }
`;

export const FilterIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: auto 10px auto 20px;
`;
