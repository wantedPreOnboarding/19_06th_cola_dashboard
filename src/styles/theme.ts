import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    keys: ['md', 'lg'],
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: '#1157C9',
      light: '#6690D5',
      xlight: '#E7EEFA',
      contrastText: '#fff',
    },
    text: {
      primary: '#252525',
    },
    grey: {
      '50': '#f2f2f2',
      '600': '#727272',
      '900': '#252525',
    },
    error: {
      main: '#D30000',
      light: '#E4CFCF',
    },
    info: {
      main: '#6690D5',
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: '#f2f2f2',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#D7E3F7',
          },
        },
      },
    },
  },
});

export { theme };
