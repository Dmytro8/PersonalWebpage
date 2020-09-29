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
    font-family: 'Exo 2', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: ${(props: GlobalStylesType) =>
      `${props.theme.accent} ${props.theme.body}`};
    
    &::selection {
      background-color: ${(props: GlobalStylesType) => props.theme.accent};
      color: ${(props: GlobalStylesType) => props.theme.body};
    }
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: ${(props: GlobalStylesType) => props.theme.body};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props: GlobalStylesType) => props.theme.body};
      border: 4px solid ${(props: GlobalStylesType) => props.theme.accent};
    }
  }
  html{
    scroll-behavior: smooth;
  }
  html, body {
    overflow-x: hidden !important;
    padding: 0 !important;
  }

  body {
    background-color: ${(props: GlobalStylesType) => props.theme.body};
    color: ${(props: GlobalStylesType) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  section{
    padding: 70px 0 30px 0;
  }
`;
