import React, { FC } from "react";
import { ButtonBody } from "./Button.styled";

type ButtonProps = {
  text: string;
  size: "small" | "medium" | "big";
  children?: React.ReactNode;
  [props: string]: any;
};
const Button: FC<ButtonProps> = ({ text, children, size, ...props }) => {
  return (
    <>
      {children ? (
        <ButtonBody
          type="submit"
          whileTap={{ scale: 0.9 }}
          size={size}
          {...props}
        >
          {children}
        </ButtonBody>
      ) : (
        <ButtonBody
          type="submit"
          whileTap={{ scale: 0.9 }}
          size={size}
          {...props}
        >
          {text}
        </ButtonBody>
      )}
    </>
  );
};

export default Button;
