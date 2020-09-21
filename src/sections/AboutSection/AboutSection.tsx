import React from "react";
import {
  AboutSectionContainer,
  AboutSectionDescription,
  AboutSectionMore,
  AboutSectionMe,
  AboutSectionContent,
  AboutSectionText,
  AboutSectionSignature,
  AboutSectionMoreText,
  AboutSectionDownload
} from "./AboutSection.styled";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import CV from "../../static/CV_Patalakha_Dmytro.pdf";

const AboutSection = () => {
  return (
    <AboutSectionContainer id="about">
      <AboutSectionDescription>
        <AboutSectionMe>Me</AboutSectionMe>
        <AboutSectionContent>
          <Title title="About Me" size="big" />
          <AboutSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AboutSectionText>
          <AboutSectionSignature>Dmytro</AboutSectionSignature>
        </AboutSectionContent>
      </AboutSectionDescription>
      <AboutSectionMore>
        <AboutSectionMoreText>
          Need more information about my skills? Download the CV.
        </AboutSectionMoreText>
        <Button text="Download CV">
          <AboutSectionDownload href={CV} download>
            Download CV
          </AboutSectionDownload>
        </Button>
      </AboutSectionMore>
    </AboutSectionContainer>
  );
};

export default AboutSection;
