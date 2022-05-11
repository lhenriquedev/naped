// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --purple-light: #8257e6;

    --white: #FEFBFB;
    --white-200: #c4c4c4;
    --gray-200: #282830;
    --dark: #13131f;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--dark);
    font-family: Inter, Helvetica, Sans-Serif;
  }

  img {
    max-width: 100%;
  }

   @media (max-width: 75em) {
    html {
      font-size: 56.25%;
    }
  }
`;

export default GlobalStyle;
