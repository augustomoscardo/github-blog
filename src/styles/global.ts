import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    border: 1px solid ${props => props.theme.blue};
  }

  body {
    background-color: ${props => props.theme["base-background"]};
    color: ${props => props.theme["base-text"]};
    -wekkit-font-smooth: antialiased;
    
    width: 100%;
  }

  body, input, textarea, button {
    font: 400 1rem "Nunito", sans-serif;
    line-height: 1.6;
  }
`