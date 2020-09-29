import { useState, useEffect } from "react";

export function useScroll() {
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);

  const listener = (e: any) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top - 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return scrollY;
}
