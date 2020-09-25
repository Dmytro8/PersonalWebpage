import * as yup from "yup";

const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const validNameRegex = /\s*^[^0-9]+$\s*/;
const validPhoneNumber = /\s*^[0-9]*$\s*/;

export const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .matches(validNameRegex, "enter a valid name"),
  phone: yup.string().matches(validPhoneNumber, "enter a valid phone number"),
  email: yup
    .string()
    .required("email is required")
    .matches(validEmailRegex, "enter a valid e-mail"),
  message: yup.string().required("message is required")
});
