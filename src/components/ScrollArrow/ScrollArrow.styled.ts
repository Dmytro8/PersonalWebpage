import styled from "styled-components";

export const ScrollArrowWrapper = styled.div`
  justify-self: end;
  display: grid;
  justify-items: center;
  position: relative;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ScrollRail = styled.span`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.textOpacity};
`;

type ScrollArrowTextProps = {
  scrollProgress: number;
};
export const ScrollArrowText = styled.p<ScrollArrowTextProps>`
  position: absolute;
  text-transform: uppercase;
  transition: transform 0.3s;
  transform: ${({ scrollProgress }) =>
    "rotate(90deg) translateX(" + scrollProgress + "px)"};
  background: ${({ theme }) => theme.body};
  width: fit-content;
  letter-spacing: 0.05em;
  font-size: 16px;
  color: ${({ theme }) => theme.textOpacity};
  padding: 0 5px;
  display: grid;
  grid-auto-flow: column;
`;
