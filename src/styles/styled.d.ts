import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    primary: {
      main: '#1157C9';
      light: '#E7EEFA';
      xlight: '#F5F9FF';
      contrastText: '#fff';
    };
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
