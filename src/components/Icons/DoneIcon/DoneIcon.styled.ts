import styled, { keyframes, css } from "styled-components";

const grow = keyframes`
  60% {
      transform: scale(.8);
      stroke-width: 4px;
      fill-opacity: 0;
  }
  100% {
      transform: scale(.9);
      stroke-width: 8px;
      fill-opacity: 1;
      fill: #219a00;
  }
`;

const draw = keyframes`
  0%, 100% { stroke-opacity: 1; }
  100% { stroke-dashoffset: 0; }
`;

export const SVGContainer = styled.div``;

export const SVGDone = styled.svg``;

export const CircleDone = styled.circle`
  /* @supports (
    animation: ${grow} 0.5s cubic-bezier(0.25, 0.25, 0.25, 1) forwards
  ) { */
    fill-opacity: 0;
    stroke: #219a00;
    stroke-width: 16px;
    transform-origin: center;
    transform: scale(0);
    animation: ${grow} 10s cubic-bezier(0.25, 0.25, 0.25, 1.25) forwards;
  /* } */
`;

export const PathDone = styled.path`
  /* @supports (
    animation: ${grow} 0.5s cubic-bezier(0.25, 0.25, 0.25, 1) forwards
  ) { */
    stroke-opacity: 0;
    stroke-dasharray: 29px;
    stroke-dashoffset: 29px;
    animation: ${draw} 0.5s cubic-bezier(0.25, 0.25, 0.25, 1) forwards;
    animation-delay: 0.6s;
  /* } */
`;
