import React, { FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import {
  ContactFormBody,
  ContactField,
  StyledTextField,
  ReCAPTCHAError
} from "./ContactForm.styled";
import { ContactTitle } from "../../../sections/ContactSection/ContactSection.styled";
import { Button } from "../../Button";
import { ContactSchema } from "../FormValidation";
import { opacityVariants } from "../../../styles/animation";
import { DialogOnSend } from "../../DialogOnSend";

type ContactFormProps = {
  theme: "dark" | "light";
};

function encode(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const ContactForm: FC<ContactFormProps> = ({ theme }) => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [captcha, setCaptcha] = useState(null);
  const [open, setOpen] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const { handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(ContactSchema)
  });
  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    if (captcha) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data })
      })
        .then(() => {
          setIsFormSuccess(true);
          handleClickOpen();
          reset({ name: "", phone: "", email: "", message: "" });
        })
        .catch(error => {
          setIsFormSuccess(false);
          handleClickOpen();
        });
    } else {
      setCaptchaError(true);
    }
  };
  const onChange = (value: any) => {
    setCaptchaError(false);
    setCaptcha(value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <ContactFormBody
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={opacityVariants}
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <ContactTitle>{t("contact.formTitle")}</ContactTitle>
      <ContactField>
        {errors.name ? (
          <>
            <Controller
              error
              as={StyledTextField}
              fullWidth
              placeholder={"*" + t("contact.namePlaceholder")}
              type="text"
              name="name"
              title={t("contact.nameInputTitle")}
              control={control}
              defaultValue=""
              helperText={errors.name ? errors.name.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder={"*" + t("contact.namePlaceholder")}
            type="text"
            name="name"
            title={t("contact.nameInputTitle")}
            control={control}
            defaultValue=""
          />
        )}
      </ContactField>
      <ContactField>
        {errors.phone ? (
          <>
            <Controller
              error
              as={StyledTextField}
              fullWidth
              placeholder={t("contact.phonePlaceholder")}
              type="tel"
              name="phone"
              title={t("contact.phoneInputTitle")}
              control={control}
              defaultValue=""
              helperText={errors.phone ? errors.phone.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder={t("contact.phonePlaceholder")}
            type="tel"
            name="phone"
            title={t("contact.phoneInputTitle")}
            control={control}
            defaultValue=""
          />
        )}
      </ContactField>
      <ContactField>
        {errors.email ? (
          <>
            <Controller
              error
              as={StyledTextField}
              fullWidth
              placeholder={"*" + t("contact.emailPlaceholder")}
              type="email"
              name="email"
              title={t("contact.emailInputTitle")}
              control={control}
              defaultValue=""
              helperText={errors.email ? errors.email.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder={"*" + t("contact.emailPlaceholder")}
            type="email"
            name="email"
            title={t("contact.emailInputTitle")}
            control={control}
            defaultValue=""
          />
        )}
      </ContactField>
      <ContactField>
        {errors.message ? (
          <>
            <Controller
              error
              as={StyledTextField}
              fullWidth
              placeholder={"*" + t("contact.messagePlaceholder")}
              type="text"
              multiline
              rowsMax="5"
              name="message"
              title={t("contact.messageInputTitle")}
              control={control}
              defaultValue=""
              helperText={errors.message ? errors.message.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder={"*" + t("contact.messagePlaceholder")}
            type="text"
            multiline
            rowsMax="5"
            name="message"
            title={t("contact.messageInputTitle")}
            control={control}
            defaultValue=""
          />
        )}
      </ContactField>
      <ContactField
        style={{
          overflow: "hidden"
        }}
      >
        <ReCAPTCHA
          theme={theme}
          sitekey="6Le0XNAZAAAAAP_1lLqdGAMTtsGnbCktNFdYRs4W"
          onChange={onChange}
        />
        <ReCAPTCHAError isError={captchaError}>
          Please check the box above to proceed
        </ReCAPTCHAError>
      </ContactField>
      <Button text={t("contact.button")} size="medium" />
      <DialogOnSend
        isFormSuccess={isFormSuccess}
        open={open}
        handleClose={handleClose}
      />
    </ContactFormBody>
  );
};

export default ContactForm;
