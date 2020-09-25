import React, { FC, useState } from "react";
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

type ContactFormProps = {
  theme: "dark" | "light";
};
const ContactForm: FC<ContactFormProps> = ({ theme }) => {
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
  return (
    <ContactFormBody onSubmit={handleSubmit(onSubmit)}>
      <ContactTitle>Contact Form</ContactTitle>
      <ContactField>
        {errors.name ? (
          <>
            <Controller
              error
              as={StyledTextField}
              fullWidth
              placeholder="*Your name"
              type="text"
              name="name"
              title="Enter your name"
              control={control}
              defaultValue=""
              helperText={errors.name ? errors.name.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder="*Your name"
            type="text"
            name="name"
            title="Enter your name"
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
              placeholder="Your phone number"
              type="tel"
              name="phone"
              title="Enter your phone number"
              control={control}
              defaultValue=""
              helperText={errors.phone ? errors.phone.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder="Your phone number"
            type="tel"
            name="phone"
            title="Enter your phone number"
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
              placeholder="*Your e-mail"
              type="email"
              name="email"
              title="Enter your email"
              control={control}
              defaultValue=""
              helperText={errors.email ? errors.email.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder="*Your e-mail"
            type="email"
            name="email"
            title="Enter your email"
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
              placeholder="*Message"
              type="text"
              multiline
              rowsMax="5"
              name="message"
              title="Enter your message"
              control={control}
              defaultValue=""
              helperText={errors.message ? errors.message.message : ""}
            />
          </>
        ) : (
          <Controller
            as={StyledTextField}
            fullWidth
            placeholder="*Message"
            type="text"
            multiline
            rowsMax="5"
            name="message"
            title="Enter your message"
            control={control}
            defaultValue=""
          />
        )}
      </ContactField>
      <ContactField
        style={{
          width: "fit-content"
        }}
        isError={captchaError}
      >
        <ReCAPTCHA
          theme={theme}
          sitekey="6Le0XNAZAAAAAP_1lLqdGAMTtsGnbCktNFdYRs4W"
          onChange={onChange}
        />
      </ContactField>
      <Button text="Send Message" size="small" />
    </ContactFormBody>
  );
};

export default ContactForm;
