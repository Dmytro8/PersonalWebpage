import { motion } from "framer-motion";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

// type ContactFormBodyProps = {
//   netlify: any;
// };

export const ContactFormBody = styled(motion.form)`
  box-shadow: -5px 5px 20px 10px rgba(0, 0, 0, 0.25);
  padding: 30px;
  display: grid;
  gap: 20px;
  button {
    align-self: center;
    justify-self: center;
    display: block;
  }
`;

export const ContactField = styled.div``;

type StyledTextField = {
  type: string;
  placeholder: string;
};
export const StyledTextField = styled(TextField)<StyledTextField>`
  & .MuiInput-input {
    color: ${({ theme }) => theme.text};
  }
  & .MuiInput-underline:before {
    border-bottom-color: ${({ theme }) => theme.textOpacity};
  }
  & .MuiInput-underline:hover:not(.Mui-disabled)::before {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.accent};
  }
  & .MuiInput-underline.Mui-error:after {
    border-bottom-color: #ed4337;
  }
  &:hover .MuiInput-underline.Mui-error:after {
    border-bottom-color: #ed4337;
  }
`;

type ReCAPTCHAErrorProps = {
  isError?: boolean;
};
export const ReCAPTCHAError = styled.p<ReCAPTCHAErrorProps>`
  display: ${({ isError }) => (isError ? "inline-block" : "none")};
  color: #ed4337;
  margin: 0;
  font-size: 0.75rem;
  margin-top: 3px;
  text-align: left;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;
