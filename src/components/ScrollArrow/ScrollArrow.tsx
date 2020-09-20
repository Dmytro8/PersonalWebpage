import React, { useEffect, useState } from "react";
import {
  ScrollArrowWrapper,
  ScrollArrowText,
  ScrollRail
} from "./ScrollArrow.styled";
import { useViewportScroll, useTransform } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";

const ScrollArrow = () => {
  const scrollY = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  let scrollHeight = document.body.scrollHeight - window.innerHeight - 41;

  useEffect(() => {
    setScrollProgress(Math.round(Math.abs(scrollY * 100) / scrollHeight));
    console.log(scrollY, scrollProgress + "%");

    return () => {};
  }, [scrollY]);
  return (
    <ScrollArrowWrapper>
      <ScrollRail />
      <ScrollArrowText scrollProgress={Math.round(scrollProgress * 0.8) + 26}>
        Scroll
      </ScrollArrowText>
      {/* <svg
        width="8"
        height="49"
        viewBox="0 0 8 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.64645 48.3536C3.84171 48.5488 4.15829 48.5488 4.35355 48.3536L7.53553 45.1716C7.7308 44.9763 7.7308 44.6597 7.53553 44.4645C7.34027 44.2692 7.02369 44.2692 6.82843 44.4645L4 47.2929L1.17157 44.4645C0.976311 44.2692 0.659728 44.2692 0.464466 44.4645C0.269204 44.6597 0.269204 44.9763 0.464466 45.1716L3.64645 48.3536ZM3.5 0L3.5 48H4.5L4.5 0L3.5 0Z" />
      </svg> */}
    </ScrollArrowWrapper>
  );
};

export default ScrollArrow;
