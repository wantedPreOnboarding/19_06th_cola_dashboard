import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GrobalStyles = createGlobalStyle`
  ${reset}
  body, div, span, h1, h2, h3, h4,
  h5, h6, p, a, em, img, q, strong,
  b, i, ul, li, form, input, button,
  label, article,footer, nav, section, 
  main {
  margin: 0;
  padding: 0;
  border: 0;
  }

  ol, ul, li {
    list-style: none;
  }

  a {
    color:inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button{
    border: none;
    background: inherit;
    cursor: pointer;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif; ;
    line-height: 1;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GrobalStyles;
