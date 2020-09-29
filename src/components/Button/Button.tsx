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
        <ButtonBody type="submit" whileTap={{ scale: 0.9 }} size={size}>
          {children}
        </ButtonBody>
      ) : (
        <ButtonBody type="submit" whileTap={{ scale: 0.9 }} size={size}>
          {text}
        </ButtonBody>
      )}
    </>
  );
};

export default Button;
