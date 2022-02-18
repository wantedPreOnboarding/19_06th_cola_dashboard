import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledBtn = styled(Button)`
  width: 250px;
  height: 40px;
  display: flex;
  background: #e7eefa;
  justify-content: flex-start;
  &:hover {
    svg {
      fill: white;
    }
    span {
      color: white;
    }
  }
  svg {
    fill: #1157c9;
  }
  span {
    color: #252525;
    margin-left: 5px;
  }
`;

export const Title = styled('h3')(
  ({ theme }) => `
  font-size: ${theme.typography.body1.fontSize};
  `,
);
