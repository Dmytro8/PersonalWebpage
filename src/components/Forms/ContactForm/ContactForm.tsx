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
  StyledTextField
} from "./ContactForm.styled";
import { ContactTitle } from "../../../sections/ContactSection/ContactSection.styled";
import { Button } from "../../Button";
import { ContactSchema } from "../FormValidation";
import { opacityVariants } from "../../../styles/animation";

type ContactFormProps = {
  theme: "dark" | "light";
};
const ContactForm: FC<ContactFormProps> = ({ theme }) => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [captcha, setCaptcha] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(ContactSchema)
  });
  const onSubmit = (data: any) => {
    if (captcha) {
      alert(data);
    } else {
      setCaptchaError(true);
    }
  };
  const onChange = (value: any) => {
    setCaptchaError(false);
    setCaptcha(value);
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
    >
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
        isError={captchaError}
      >
        <ReCAPTCHA
          theme={theme}
          sitekey="6Le0XNAZAAAAAP_1lLqdGAMTtsGnbCktNFdYRs4W"
          onChange={onChange}
        />
      </ContactField>
      <Button text={t("contact.button")} size="medium" />
    </ContactFormBody>
  );
};

export default ContactForm;
