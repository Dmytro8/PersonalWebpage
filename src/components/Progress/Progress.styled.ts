import styled from "styled-components";

type ProgressContainerProps = {
  color: string;
};
export const ProgressContainer = styled.div<ProgressContainerProps>`
  width: 100%;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  color: ${({ color }) => color};
`;
