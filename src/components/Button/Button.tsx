import React, { FC } from "react";
import { ButtonBody } from "./Button.styled";

type ButtonProps = {
  text: string;
  children?: React.ReactNode;
};
const Button: FC<ButtonProps> = ({ text, children }) => {
  return (
    <>
      {children ? (
        <ButtonBody>{children}</ButtonBody>
      ) : (
        <ButtonBody>{text}</ButtonBody>
      )}
    </>
  );
};

export default Button;
