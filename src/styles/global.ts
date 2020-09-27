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

  body {
    background: ${(props: GlobalStylesType) => props.theme.body};
    color: ${(props: GlobalStylesType) => props.theme.text};
    transition: all 0.3s ease;
  }
`;
