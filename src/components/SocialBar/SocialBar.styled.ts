import { OuterContainer } from "./../../styles/common";
import { SocialBarProps } from "./SocialBar";
import styled from "styled-components";

export const SocialBarDiv = styled.div<SocialBarProps>`
  display: grid;
  align-content: start;
  padding: ${({ inDrawer }) => (inDrawer ? "0 20px" : "0")};
  gap: 20px;
  position: relative;
  width: fit-content;
  svg {
    font-size: ${({ size }) => (size === "small" ? "2rem" : "3rem")};
  }
  &:after {
    position: absolute;
    right: 0;
    content: ${({ inDrawer }) => (inDrawer ? "''" : "unset")};
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.text};
    opacity: 0.2;
  }

  @media screen and (max-width: 800px) {
    display: ${({ inDrawer }) => (inDrawer ? "grid" : "none")};
  }
`;

type SocialLinkProps = {
  inDrawer: boolean;
};
export const SocialLink = styled.a<SocialLinkProps>`
  color: ${({ theme, inDrawer }) =>
    inDrawer ? theme.text : theme.text + "7F"};
`;

export const SocialBarContainer = styled(OuterContainer)`
  gap: 20px;
`;
