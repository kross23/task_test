import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: Poppins , Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
`;
 
export default GlobalStyle;