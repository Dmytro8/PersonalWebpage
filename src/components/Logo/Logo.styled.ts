import { LogoProps } from "./Logo";
import styled from "styled-components";
import { GlobalStylesType } from "../../styles/global";

export const LogoWrapper = styled.div`
  width: fit-content;
  justify-self: start;
  cursor: pointer;
`;

export const LogoUpper = styled.span`
  display: block;
  text-transform: uppercase;
  border-top: 1px solid
    ${({ theme }: GlobalStylesType & LogoProps) => theme.accent};
  color: ${({ theme }: GlobalStylesType & LogoProps) => theme.text};
  width: fit-content;
  transition: font-size 0.3s;
  font-size: ${({ size }) => (size === "big" ? "17px" : "14px")};
`;

export const LogoBottom = styled.span`
  display: block;
  text-transform: uppercase;
  margin-left: 30px;
  border-bottom: 1px solid
    ${({ theme }: GlobalStylesType & LogoProps) => theme.accent};
  color: ${({ theme }: GlobalStylesType & LogoProps) => theme.text};
  padding-bottom: 2px;
  width: fit-content;
  transition: font-size 0.3s;
  font-size: ${({ size }) => (size === "big" ? "17px" : "14px")};
`;
