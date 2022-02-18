import { styled } from '@mui/system';
import { ListItem } from '@mui/material';

export const Title = styled('h3')`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 10px 10px;
`;

export const Wrapper = styled('div')`
  width: 993px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background: #fff;
`;

export const Item = styled(ListItem)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Name = styled('span')`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Box = styled('div')`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #d9d5ec;
  &:first-of-type {
    padding-top: 0;
  }
`;
