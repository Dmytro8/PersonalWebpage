import { motion } from "framer-motion";
import { InnerContainer } from "./../../styles/common";
import styled from "styled-components";

export const ContactBody = styled.section`
  display: grid;
  justify-content: center;
  align-content: start;
  padding-top: 50px;
`;

export const ContactContainer = styled(InnerContainer)``;

export const ContactContent = styled.div`
  /* height: 80vh; */
  display: grid;
  gap: calc(60px + 5vw);
  /* align-content: center; */
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactAddress = styled(motion.div)`
  padding: 30px;
`;

export const ContactTitle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  text-transform: uppercase;
  text-align: center;
`;

type ContactTextProps = {
  main: boolean;
};
export const ContactText = styled.p<ContactTextProps>`
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: ${({ theme, main }) => (main ? theme.text : theme.textOpacity)};
  text-align: center;
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(5),
  &:nth-child(7) {
    padding-top: 20px;
  }

  @media screen and (max-width: 800px) {
    line-height: 25px;
  }
`;
