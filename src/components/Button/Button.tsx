import React, { FC } from "react";
import { ButtonBody } from "./Button.styled";

type ButtonProps = {
  text: string;
};
const Button: FC<ButtonProps> = ({ text }) => {
  return <ButtonBody>{text}</ButtonBody>;
};

export default Button;
