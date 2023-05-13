import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Footer } from "../../components/Footer";
import {
  ContactBody,
  ContactContainer,
  ContactContent,
  ContactAddress,
  ContactTitle,
  ContactText
} from "./ContactSection.styled";
import { ContactForm } from "../../components/Forms/ContactForm";
import { opacityVariants } from "../../styles/animation";

type ContactSectionProps = {
  theme: "dark" | "light";
};

const ContactSection: FC<ContactSectionProps> = ({ theme }) => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <ContactBody id="contact">
      <ContactContainer>
        <ContactContent>
          <ContactAddress
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={opacityVariants}
          >
            <ContactTitle>{t("contact.title")}</ContactTitle>
            <ContactText main={false}>{t("contact.description")}</ContactText>
            <ContactText main={true}>{t("contact.emailTitle")}</ContactText>
            <ContactText main={false}>{t("contact.email")}</ContactText>
          </ContactAddress>
          <ContactForm theme={theme} />
        </ContactContent>
        <Footer />
      </ContactContainer>
    </ContactBody>
  );
};

export default ContactSection;
