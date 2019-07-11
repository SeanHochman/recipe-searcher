import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { theme } from './utils';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html,
  body,
  #root {
    font-display: swap;
  }
  html, body, input, textarea, button {font-family: 'Roboto', Arial; font-size: 15px;}

  html {
    box-sizing: border-box;
    height: 100%;
   
  }
  *, *:before, *:after {
  box-sizing: inherit;
}
  body {
    box-sizing: border-box;
    min-height: 100%;
    color: ${theme('colors', 'text')};
    background-color: ${theme('colors', 'white')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

 
`;

export default GlobalStyle;
