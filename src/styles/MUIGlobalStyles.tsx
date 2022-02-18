import React, { ReactElement } from 'react';
import { GlobalStyles } from '@mui/material';

const MUIGlobalStyles = (): ReactElement => (
  <GlobalStyles
    styles={{
      ol: { listStyle: 'none' },
      ul: { listStyle: 'none' },
      li: { listStyle: 'none' },
      a: {
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
      },
      button: {
        border: 'none',
        background: 'inherit',
        cursor: 'pointer',
      },
    }}
  />
);

export default MUIGlobalStyles;
