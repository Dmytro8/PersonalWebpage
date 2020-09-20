import React, { FC } from "react";
import { TitleText } from "./Title.styled";

type TitleProps = {
  title: string;
  size: "small" | "big";
};

const Title: FC<TitleProps> = ({ title, size }) => {
  return <TitleText size={size}>{title}</TitleText>;
};

export default Title;
