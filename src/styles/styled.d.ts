import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      lightBlue: string;
      sky: string;
      white: string;
      black: string;
      gray: string;
      red: string;
      lightGray: string;
      red: string;
      lightRed: string;
    };
    fontSize: {
      s: string;
      m: string;
      l: string;
    };
    fontWeight: {
      semiStrong: number;
      strong: number;
    };
  }
}
