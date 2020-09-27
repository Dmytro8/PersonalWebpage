import { useEffect, useState } from "react";

export const useDarkMode = (): ["dark" | "light", () => void] => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const setMode = (mode: "dark" | "light") => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      // @ts-ignore
      setTheme(localTheme);
    } else {
      setMode("light");
    }
  }, []);

  return [theme, toggleTheme];
};
