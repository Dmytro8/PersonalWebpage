import React, { FC, useState } from "react";
import {
  LanguageButton,
  LanguageWrapper,
  LanguageControl,
  CustomMenuItem
} from "./LanguageBar.styled";
import i18n from "../../i18n";
import Select from "@material-ui/core/Select";
import styled from "styled-components";

type LanguageBarProps = {
  isDrawer: boolean;
};

const CustomSelect = styled(({ className, ...props }) => (
  <Select
    {...props}
    MenuProps={{ classes: { paper: className }, style: { zIndex: 1600 } }}
  />
))`
  && {
    ul {
      padding: 0;
    }
  }
`;

const LanguageBar: FC<LanguageBarProps> = ({ isDrawer }) => {
  const [language, setLanguage] = useState(
    window.localStorage.getItem("i18nextLng") ?? "eng"
  );
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
    changeLanguage(event.target.value as string);
  };

  return (
    <LanguageWrapper isDrawer={isDrawer}>
      <>
        {isDrawer ? (
          <>
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
              active={language === "pol"}
              onClick={() => {
                setLanguage("pol");
                changeLanguage("pol");
              }}
            >
              Pol
            </LanguageButton>
            <LanguageButton
              active={language === "ukr"}
              onClick={() => {
                setLanguage("ukr");
                changeLanguage("ukr");
              }}
            >
              Ukr
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
          </>
        ) : (
          <LanguageControl>
            <CustomSelect
              value={language}
              onChange={handleChange}
              MenuProps={{
                style: { zIndex: 1600 }
              }}
            >
              <CustomMenuItem value={"eng"}>ENG</CustomMenuItem>
              <CustomMenuItem value={"pol"}>POL</CustomMenuItem>
              <CustomMenuItem value={"ukr"}>UKR</CustomMenuItem>
              <CustomMenuItem value={"rus"}>RUS</CustomMenuItem>
            </CustomSelect>
          </LanguageControl>
        )}
      </>
    </LanguageWrapper>
  );
};

export default LanguageBar;
