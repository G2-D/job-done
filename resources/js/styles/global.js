import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #21222C;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    padding: 40px 20px;
  }

  html, body, #app {
    height: 100%
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  p {
    margin-bottom: 0;
  }
`;