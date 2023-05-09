import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${props => props.theme["green-500"]}; */
    border: 1px solid ${props => props.theme["base-border"]};
  }

  body {
    background-color: ${props => props.theme["base-background"]};
    color: ${props => props.theme["base-text"]};
    -wekkit-font-smooth: antialiased;

    
    width: 100%;
    /* margin: 0 auto; */
  }

  body, input, textarea, button {
    font: 400 1rem "Nunito", sans-serif;
    line-height: 1.6;
  }
`