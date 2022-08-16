import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-feature-settings: normal;
    -webkit-text-size-adjust: none;

  a {
    text-decoration: none;
  }
  
  input, select {
    appearance: none;
  }
  
  input, button, textarea, select {
    font-family: inherit;
    outline: none;
  }

  ol, ul {
    list-style: none;
  } 
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after, q:before, q:after {
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
    border: 4px solid #fff;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #CBCBCB;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #A3A3A3;
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyle;
