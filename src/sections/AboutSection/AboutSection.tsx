import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <AboutSectionContainer id="about">
      <AboutSectionDescription>
        <AboutSectionMe></AboutSectionMe>
        <AboutSectionContent>
          <Title title={t("about.title")} size="big" />
          <AboutSectionText>{t("about.description")}</AboutSectionText>
          <AboutSectionSignature>Dmytro</AboutSectionSignature>
        </AboutSectionContent>
      </AboutSectionDescription>
      <AboutSectionMore>
        <AboutSectionMoreText>{t("about.need")}</AboutSectionMoreText>
        <Button text="Download CV" size="medium">
          <AboutSectionDownload href={CV} download>
            {t("about.button")}
          </AboutSectionDownload>
        </Button>
      </AboutSectionMore>
    </AboutSectionContainer>
  );
};

export default AboutSection;
