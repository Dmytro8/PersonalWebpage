import { motion } from "framer-motion";
import styled from "styled-components";

type TitleTextProps = {
  size: "small" | "big";
};
export const TitleText = styled(motion.p)<TitleTextProps>`
  font-size: ${({ size }) => (size === "small" ? "32px" : "48px")};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-content: center;

  &::before {
    display: inline-grid;
    align-self: center;
    content: "";
    width: 90px;
    height: 1px;
    background: ${({ theme }) => theme.accent};
    margin: 0 10px 5px 0;
  }
`;
