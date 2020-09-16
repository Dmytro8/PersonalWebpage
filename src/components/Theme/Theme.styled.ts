import styled from "styled-components";

type ThemeWrapperProps = {
  size: string;
};
export const ThemeWrapper = styled.div<ThemeWrapperProps>`
  justify-self: end;
  align-self: center;
  height: ${({ size }) => (size === "small" ? "24px" : "32px")};
`;

type ThemeButtonProps = {
  size: string;
};
export const ThemeButton = styled.button<ThemeButtonProps>`
  background: transparent;
  border: none;
  padding: 0 10px;
  margin: 0 20px;
  cursor: pointer;
  svg {
    transition: all 0.3s;
    color: ${({ theme }) => theme.accent};
    font-size: ${({ size }) => (size === "small" ? "1.5rem" : "2rem")};
  }
  &:focus {
    outline: none;
  }
`;
