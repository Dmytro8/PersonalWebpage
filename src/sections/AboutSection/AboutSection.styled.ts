import { InnerContainer } from "./../../styles/common";
import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-rows: 3fr 1fr;
  /* gap: 20px; */
  @media screen and (max-width: 800px) {
    gap: 100px;
  }
  button {
    padding: 1.4rem 0;
  }
`;

export const AboutSectionDescription = styled(InnerContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const AboutSectionMore = styled(InnerContainer)`
  display: grid;
  gap: 20px;
  @media screen and (max-width: 800px) {
    gap: 10px;
  }
`;

export const AboutSectionMe = styled.div``;

export const AboutSectionContent = styled.div`
  display: grid;
  gap: 50px;
  @media screen and (max-width: 800px) {
    gap: 20px;
  }
`;

export const AboutSectionText = styled.p`
  text-align: justify;
  font-size: calc(14px + 0.5vw);
  line-height: 28px;
`;

export const AboutSectionSignature = styled.p`
  font-family: "Dancing Script", cursive;
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
