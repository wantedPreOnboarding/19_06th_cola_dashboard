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
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70vw;
  height: 70vh;
  min-width: 500px;
  min-height: 500px;
  padding: 10px 0;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: #fff;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Item = styled(ListItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90%;
`;

export const Name = styled('div')`
  width: 35%;
  text-align: left;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Text = styled('div')`
  width: 65%;
  font-size: 14px;
  text-align: left;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Box = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;
