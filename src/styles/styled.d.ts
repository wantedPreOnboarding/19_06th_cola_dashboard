import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      purple: string;
      lightPurple: string;
      darkPurple: string;
      mauve: string;
      green: string;
      lightGreen: string;
      red: string;
      lightRed: string;
      brown: string;
      darkBrown: string;
      lightBrown: string;
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
