import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

type LanguageWrapperProps = {
  isDrawer: boolean;
};
export const LanguageWrapper = styled.div<LanguageWrapperProps>`
  display: grid;
  grid-auto-flow: column;
  justify-self: end;
  gap: 5px;
  @media screen and (max-width: 800px) {
    display: ${({ isDrawer }) => (isDrawer ? "grid" : "none")};
  }
`;

type LanguageButtonProps = {
  active?: boolean;
};
export const LanguageButton = styled.button<LanguageButtonProps>`
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.accent : theme.text)};
  &:focus {
    outline: none;
  }
`;

export const LanguageControl = styled(FormControl)`
  display: grid !important;
  svg {
    color: ${({ theme }) => theme.text};
  }
  & .MuiSelect-root {
    color: ${({ theme }) => theme.text};
    &::before {
      content: unset;
    }
    &:focus {
      background-color: unset;
    }
  }
  & .MuiInput-underline:before,
  & .MuiInput-underline:after {
    content: unset;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  && {
    background-color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    &.Mui-selected {
      background-color: ${({ theme }) => theme.accent};
      color: ${({ theme }) => theme.body};
      &:hover {
        background-color: ${({ theme }) => theme.accent};
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.body + "CC"};
    }
  }
`;
