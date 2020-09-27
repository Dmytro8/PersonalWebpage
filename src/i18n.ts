import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/eng/translationEN.json";
import translationPL from "./locales/pol/translationPL.json";
import translationRU from "./locales/rus/translationRU.json";

// the translation
const resources = {
  eng: {
    translation: translationEN
  },
  pol: {
    translation: translationPL
  },
  rus: {
    translation: translationRU
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      resources,
      fallbackLng: window.localStorage.getItem("i18nextLng") ?? "eng",
      debug: true,
      detection: { order: ["queryString", "cookie"] },
      interpolation: {
        escapeValue: false
      }
    },
    (err, t) => {
      if (err) return console.log("something went wrong loading", err);
      t("key"); // -> same as i18next.t
    }
  );

export default i18n;
