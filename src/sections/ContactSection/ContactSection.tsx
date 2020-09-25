import React, { FC } from "react";
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
  return (
    <ContactBody id="contact">
      <ContactContainer>
        <ContactContent>
          <ContactAddress>
            <ContactTitle>Contact</ContactTitle>
            <ContactText main={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ContactText>
            <ContactText main={true}>Address</ContactText>
            <ContactText main={false}>Kraków, Poland</ContactText>
            <ContactText main={true}>Phone</ContactText>
            <ContactText main={false}>
              +48&nbsp;511&nbsp;711&nbsp;068
            </ContactText>
            <ContactText main={true}>E-mail</ContactText>
            <ContactText main={false}>dm.patalakha@gmail.com</ContactText>
          </ContactAddress>
          <ContactForm theme={theme} />
        </ContactContent>
        <Footer />
      </ContactContainer>
    </ContactBody>
  );
};

export default ContactSection;
