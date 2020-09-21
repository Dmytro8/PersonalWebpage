import { ThemeType } from "./theme";
import { createGlobalStyle } from "styled-components";

export type GlobalStylesType = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  *{
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
  }
  html{
    scroll-behavior: smooth;
  }

  body {
    background: ${(props: GlobalStylesType) => props.theme.body};
    color: ${(props: GlobalStylesType) => props.theme.text};
    /* transition: all 0.1s; */
  }
  section{
    min-height: 100vh;
  }
`;
