import React, { FC } from "react";
import { ButtonBody } from "./Button.styled";

type ButtonProps = {
  text: string;
  size: "small" | "medium" | "big";
  children?: React.ReactNode;
};
const Button: FC<ButtonProps> = ({ text, children, size }) => {
  return (
    <>
      {children ? (
        <ButtonBody size={size}>{children}</ButtonBody>
      ) : (
        <ButtonBody size={size}>{text}</ButtonBody>
      )}
    </>
  );
};

export default Button;
