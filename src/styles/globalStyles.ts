import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GrobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  a {
    color:inherit;
    text-decoration: none;
  }

  button{
    padding: 0;
    margin: 0;
    border: none;
    background: inherit;
    cursor: pointer;
  }
`;

export default GrobalStyles;
