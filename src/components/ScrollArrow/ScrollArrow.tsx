import React, { useEffect, useState } from "react";
import {
  ScrollArrowWrapper,
  ScrollArrowText,
  ScrollRail
} from "./ScrollArrow.styled";
import { useScroll } from "../../hooks/useScroll";

const ScrollArrow = () => {
  const scrollY = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  let scrollHeight = document.body.scrollHeight - window.innerHeight - 69;

  useEffect(() => {
    setScrollProgress(Math.round(Math.abs(scrollY * 100) / scrollHeight));
    return () => {};
  }, [scrollY, scrollHeight]);
  return (
    <ScrollArrowWrapper>
      <ScrollRail />
      <ScrollArrowText scrollProgress={Math.round(scrollProgress * 0.8) + 24}>
        Scroll
      </ScrollArrowText>
    </ScrollArrowWrapper>
  );
};

export default ScrollArrow;
