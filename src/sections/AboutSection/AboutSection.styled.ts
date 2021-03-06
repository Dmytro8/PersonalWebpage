import { InnerContainer } from "./../../styles/common";
import styled from "styled-components";
import { motion } from "framer-motion";
export const AboutSectionContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: start;
  gap: 100px;

  @media screen and (max-width: 800px) {
    gap: 100px;
  }
  button {
    padding: 1.4rem 0;
  }
`;

export const AboutSectionDescription = styled(InnerContainer)`
  display: grid;
  grid-template-columns: minmax(350px, 1fr) 1fr;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutSectionMore = styled(InnerContainer)`
  display: grid;
  gap: 20px;
  @media screen and (max-width: 800px) {
    gap: 10px;
  }
`;

export const AboutSectionMe = styled(motion.div)`
  img {
    width: 85%;
    object-fit: contain;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const AboutSectioImg = styled(motion.img)``;

export const AboutSectionContent = styled.div`
  display: grid;
  gap: 50px;
  @media screen and (max-width: 800px) {
    gap: 20px;
  }
`;

export const AboutSectionText = styled(motion.p)`
  text-align: justify;
  font-size: calc(14px + 0.5vw);
  line-height: 28px;
  font-weight: 300;
`;

export const AboutSectionSignature = styled(motion.p)`
  font-family: "Dancing Script", cursive !important;
  font-size: 48px;
  line-height: 58px;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    margin-top: 10px;
  }
`;

export const AboutSectionMoreText = styled.p`
  font-size: calc(16px + 0.5vw);
  line-height: 28px;
`;

export const AboutSectionDownload = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.body};
  padding: 1.4rem 3rem;
`;
