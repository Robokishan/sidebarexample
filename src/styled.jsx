import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html,
  body {
    font-family: "Roboto", "sans-serif";
    font-size: 14px;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #root {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }

  * {
    box-sizing: border-box;
  }
`;
