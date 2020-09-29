import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: grid;
  justify-self: center;
  align-content: center;
`;

export const OuterContainer = styled(Container)`
  width: 90vw;
`;

export const InnerContainer = styled(Container)`
  width: 70vw;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;

type BackgroundProps = {
  theme: "light" | "dark";
};
export const Background = styled.div<BackgroundProps>`
  position: fixed;
  left: -240px;
  top: -16vw;
  z-index: 1600;
  width: 1560px;
  height: 1491px;
  pointer-events: none;
  background: ${({ theme }) =>
    theme === "light"
      ? "radial-gradient(50% 50% at 50% 50%, rgba(238, 108, 77, 0.22) 0%, rgba(238, 108, 77, 0) 100%)"
      : "radial-gradient(50% 50% at 50% 50%, rgba(91, 192, 190, 0.22) 0%,rgba(91, 192, 190, 0) 100%)"};
`;
