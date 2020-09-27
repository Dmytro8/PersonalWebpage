import { InnerContainer } from "./../../styles/common";
import styled from "styled-components";

export const PortfolioSectionBody = styled.section`
  display: grid;
  justify-content: center;
  align-items: start;
  padding-bottom: 50px;
`;

export const PorfolioSectionContainer = styled(InnerContainer)`
  p:first-child {
    justify-self: end;
    margin-top: 70px;
  }
  button {
    padding: 1.4rem 0;
  }
`;

export const PortfolioWrapper = styled.div`
  width: inherit;
  margin-top: 80px;
  /* z-index: 1650; */
  .slick-slide,
  .slick-active,
  .slick-list {
    transition: all 0.3s ease;
    div {
      &:focus {
        outline: none;
        border: none;
      }
    }
  }
  .slick-dots {
    li button::before {
      color: ${({ theme }) => theme.text};
    }
  }
  .slick-slide.slick-active:not(.slick-current) {
    filter: blur(2px);
  }
  .slick-current {
    transition: all 0.3s ease;
    transform: scale(1.2);
  }
  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
`;

export const PortfolioImageWrapper = styled.div`
  height: calc(300px + 5vw);
  overflow: hidden;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    padding: calc(10px + 1vw);
  }
`;

export const ProjectDescription = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 50px;
`;

export const ProjectName = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
`;

export const ProjectAbout = styled.p`
  margin-top: 0;
  text-align: center;
  font-size: calc(16px + 0.5vw);
  font-weight: 300;
  line-height: 30px;
  color: ${({ theme }) => theme.textOpacity};
  padding: 0 100px;
  margin: 20px 0;
  @media screen and (max-width: 800px) {
    padding: 0;
    line-height: 24px;
  }
`;

export const ProjectView = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.body};
  padding: 1.4rem 3rem;
`;
