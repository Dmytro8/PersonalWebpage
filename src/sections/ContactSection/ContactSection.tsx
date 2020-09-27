import React, { FC } from "react";
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

type ContactSectionProps = {
  theme: "dark" | "light";
};
const ContactSection: FC<ContactSectionProps> = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <ContactBody id="contact">
      <ContactContainer>
        <ContactContent>
          <ContactAddress>
            <ContactTitle>{t("contact.title")}</ContactTitle>
            <ContactText main={false}>{t("contact.description")}</ContactText>
            <ContactText main={true}>{t("contact.addressTitle")}</ContactText>
            <ContactText main={false}>{t("contact.address")}</ContactText>
            <ContactText main={true}>{t("contact.phoneTitle")}</ContactText>
            <ContactText main={false}>{t("contact.phone")}</ContactText>
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
