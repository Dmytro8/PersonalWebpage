import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { TitleText } from "./Title.styled";
import { opacityVariants } from "../../styles/animation";

type TitleProps = {
  title: string;
  size: "small" | "big";
};

const Title: FC<TitleProps> = ({ title, size }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <TitleText
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={opacityVariants}
      size={size}
    >
      {title}
    </TitleText>
  );
};

export default Title;
