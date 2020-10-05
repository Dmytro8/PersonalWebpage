import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  PortfolioSectionBody,
  PorfolioSectionContainer,
  PortfolioWrapper,
  PortfolioImageWrapper,
  ProjectDescription,
  ProjectName,
  ProjectAbout,
  ProjectView
} from "./PortfolioSection.styled";
import { Title } from "../../components/Title";

import barberShopImg from "../../static/portfolio/project1.webp";
import beatImg from "../../static/portfolio/project2.webp";
import personalImg from "../../static/portfolio/project3.webp";
import beerImg from "../../static/portfolio/project4.webp";
import chattyImg from "../../static/portfolio/project5.webp";

import { Button } from "../../components/Button";
import { opacityVariants } from "../../styles/animation";

const PortfolioSection = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [projectIndex, setProjectIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setProjectIndex(next),
    afterChange: (current: number) => setProjectIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <PortfolioSectionBody id="portfolio">
      <PorfolioSectionContainer>
        <Title title={t("portfolio.title")} size="big" />
        <PortfolioWrapper
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={opacityVariants}
        >
          <Slider {...settings}>
            <PortfolioImageWrapper>
              <img src={barberShopImg} alt="barbershop" />
            </PortfolioImageWrapper>
            <PortfolioImageWrapper>
              <img src={beatImg} alt="beat" />
            </PortfolioImageWrapper>
            <PortfolioImageWrapper>
              <img src={personalImg} alt="personal" />
            </PortfolioImageWrapper>
            <PortfolioImageWrapper>
              <img src={beerImg} alt="beer" />
            </PortfolioImageWrapper>
            <PortfolioImageWrapper>
              <img src={chattyImg} alt="chatty" />
            </PortfolioImageWrapper>
          </Slider>
        </PortfolioWrapper>
        <ProjectDescription
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={opacityVariants}
        >
          <ProjectName>
            {t(`portfolio.project.${projectIndex}.name`)}
          </ProjectName>
          <ProjectAbout>
            {t(`portfolio.project.${projectIndex}.description`)}
          </ProjectAbout>
          <Button text="View Project" size="medium">
            <ProjectView
              href={t(`portfolio.project.${projectIndex}.github`)}
              target="_blank"
            >
              {t(`portfolio.button`)}
            </ProjectView>
          </Button>
        </ProjectDescription>
      </PorfolioSectionContainer>
    </PortfolioSectionBody>
  );
};

export default PortfolioSection;
