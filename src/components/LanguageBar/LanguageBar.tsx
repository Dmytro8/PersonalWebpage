import React, { FC, useState } from "react";
import { LanguageButton, LanguageWrapper } from "./LanguageBar.styled";

type LanguageBarProps = {
  isDrawer: boolean;
};

const LanguageBar: FC<LanguageBarProps> = ({ isDrawer }) => {
  const [language, setLanguage] = useState("eng");

  return (
    <LanguageWrapper isDrawer={isDrawer}>
      <LanguageButton
        active={language === "eng"}
        onClick={() => setLanguage("eng")}
      >
        Eng
      </LanguageButton>
      <LanguageButton
        active={language === "rus"}
        onClick={() => setLanguage("rus")}
      >
        Rus
      </LanguageButton>
      <LanguageButton
        active={language === "pol"}
        onClick={() => setLanguage("pol")}
      >
        Pol
      </LanguageButton>
    </LanguageWrapper>
  );
};

export default LanguageBar;
