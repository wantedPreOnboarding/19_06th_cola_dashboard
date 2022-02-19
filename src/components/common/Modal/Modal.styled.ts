import { styled } from '@mui/system';
import { ListItem } from '@mui/material';

export const Title = styled('h3')`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 0 16px;
`;

export const Wrapper = styled('div')`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background: #fff;
`;

export const Item = styled(ListItem)`
  display: flex;
  flex-direction: column;
`;

export const Name = styled('div')`
  width: 55%;
  padding: 2px 0;
  text-align: left;
  border-top: 1px solid #d9d5ec;
  border-left: 1px solid #d9d5ec;
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Text = styled('div')`
  width: 45%;
  padding: 2px 0;
  border-top: 1px solid #d9d5ec;
  border-right: 1px solid #d9d5ec;
  font-size: 10px;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Box = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #d9d5ec;
`;
