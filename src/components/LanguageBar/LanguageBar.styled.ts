import styled from "styled-components";

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
