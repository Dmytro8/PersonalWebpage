import React, { FC } from "react";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { ThemeWrapper, ThemeButton } from "./Theme.styled";

type ThemePropsType = {
  theme: string;
  size: string;
  toggleTheme: () => void;
};

const Theme: FC<ThemePropsType> = ({ theme, toggleTheme, size }) => {
  const isLight = theme === "light";
  return (
    <ThemeWrapper size={size}>
      <ThemeButton size={size} onClick={toggleTheme}>
        {isLight ? <Brightness5Icon /> : <Brightness4Icon />}
      </ThemeButton>
    </ThemeWrapper>
  );
};

export default Theme;
