import React, { useState, useEffect } from "react";
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

import barberShopImg from "../../static/portfolio/project1.png";
import beatImg from "../../static/portfolio/project2.png";
import personalImg from "../../static/portfolio/project3.png";
import beerImg from "../../static/portfolio/project4.png";
import chattyImg from "../../static/portfolio/project5.png";

import { projects } from "./projects.data";
import { Button } from "../../components/Button";

const PortfolioSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    console.log(projectIndex);
    return () => {};
  }, [projectIndex]);
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
  return (
    <PortfolioSectionBody id="portfolio">
      <PorfolioSectionContainer>
        <Title title="Portfolio" size="big" />
        <PortfolioWrapper>
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
        <ProjectDescription>
          <ProjectName>{projects[projectIndex].name}</ProjectName>
          <ProjectAbout>{projects[projectIndex].description}</ProjectAbout>
          <Button text="View Project">
            <ProjectView href={projects[projectIndex].github} target="_blank">
              View Project
            </ProjectView>
          </Button>
        </ProjectDescription>
      </PorfolioSectionContainer>
    </PortfolioSectionBody>
  );
};

export default PortfolioSection;
