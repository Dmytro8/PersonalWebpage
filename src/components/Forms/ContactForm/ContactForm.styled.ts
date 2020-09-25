import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const ContactFormBody = styled.form`
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

type ContactFieldProps = {
  isError?: boolean;
};
export const ContactField = styled.div<ContactFieldProps>`
  border: ${({ isError }) => (isError ? "1px solid #ed4337" : "unset")};
`;

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
