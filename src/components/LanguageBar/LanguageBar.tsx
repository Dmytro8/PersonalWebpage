import React, { FC, useState } from "react";
import { LanguageButton, LanguageWrapper } from "./LanguageBar.styled";
import i18n from "../../i18n";

type LanguageBarProps = {
  isDrawer: boolean;
};

const LanguageBar: FC<LanguageBarProps> = ({ isDrawer }) => {
  const [language, setLanguage] = useState(
    window.localStorage.getItem("i18nextLng") ?? "eng"
  );
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <LanguageWrapper isDrawer={isDrawer}>
      <LanguageButton
        active={language === "eng"}
        onClick={() => {
          setLanguage("eng");
          changeLanguage("eng");
        }}
      >
        Eng
      </LanguageButton>
      <LanguageButton
        active={language === "rus"}
        onClick={() => {
          setLanguage("rus");
          changeLanguage("rus");
        }}
      >
        Rus
      </LanguageButton>
      <LanguageButton
        active={language === "pol"}
        onClick={() => {
          setLanguage("pol");
          changeLanguage("pol");
        }}
      >
        Pol
      </LanguageButton>
    </LanguageWrapper>
  );
};

export default LanguageBar;
