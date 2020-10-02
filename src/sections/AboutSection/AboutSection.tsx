import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { opacityVariants } from "../../styles/animation";
import {
  AboutSectionContainer,
  AboutSectionDescription,
  AboutSectionMore,
  AboutSectionMe,
  AboutSectionContent,
  AboutSectionText,
  AboutSectionSignature,
  AboutSectionMoreText,
  AboutSectionDownload,
  AboutSectioImg
} from "./AboutSection.styled";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import CV from "../../static/CV_Patalakha_Dmytro.pdf";
import me from "../../static/me.png";

const AboutSection = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <AboutSectionContainer id="about">
      <AboutSectionDescription>
        <AboutSectionMe>
          <AboutSectioImg
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={opacityVariants}
            src={me}
            alt="me"
          />
        </AboutSectionMe>
        <AboutSectionContent>
          <Title title={t("about.title")} size="big" />
          <AboutSectionText
          // ref={ref}
          // animate={controls}
          // initial="hidden"
          // variants={opacityVariants}
          >
            {t("about.description")}
          </AboutSectionText>
          <AboutSectionSignature
          // ref={ref}
          // animate={controls}
          // initial="hidden"
          // variants={opacityVariants}
          >
            Dmytro
          </AboutSectionSignature>
        </AboutSectionContent>
      </AboutSectionDescription>
      <AboutSectionMore
      // ref={ref}
      // animate={controls}
      // initial="hidden"
      // variants={opacityVariants}
      >
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
