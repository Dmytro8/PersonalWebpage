import React from "react";
import { Link } from "react-scroll";
import {
  GreetingContainer,
  GreetingBody,
  GreetingNameAccent,
  GreetingName,
  GreetingDeveloper,
  GreetingDeveloperUnderline
} from "./Greeting.styled.";
import { Title } from "../Title";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { opacityVariants } from "../../styles/animation";

const Greeting = () => {
  const { t } = useTranslation();
  return (
    <GreetingBody animate="visible" initial="hidden" variants={opacityVariants}>
      <GreetingContainer>
        <Title title={t("greeting.hello")} size="small" />
        <GreetingName>
          {t("greeting.i")}{" "}
          <GreetingNameAccent>{t("greeting.name")}</GreetingNameAccent>
        </GreetingName>
        <GreetingDeveloper>
          <GreetingDeveloperUnderline>
            {t("greeting.profession")}
          </GreetingDeveloperUnderline>
        </GreetingDeveloper>
        <GreetingDeveloper>{t("greeting.message")}</GreetingDeveloper>
        <Button text="Contact me" size="big">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            {t("greeting.button")}
          </Link>
        </Button>
      </GreetingContainer>
    </GreetingBody>
  );
};

export default Greeting;
