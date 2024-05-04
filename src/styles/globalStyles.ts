import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }
  body {
    font-weight: 400;
    font-family: "Source Sans 3", sans-serif;
    color: ${props => props.theme.color.blk};
    background-color: ${props => props.theme.color.ltGry};
    line-height: 1.2;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  ol, ul {
    list-style: none;
  }
`;