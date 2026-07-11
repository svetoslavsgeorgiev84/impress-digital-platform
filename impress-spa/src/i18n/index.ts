import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import bg from "./locales/bg/translation.json";
import fr from "./locales/fr/translation.json";
import de from "./locales/de/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
 .init({
  resources: {
    en: {
      translation: en,
    },
    bg: {
      translation: bg,
    },
    fr: {
      translation: fr,
    },
    de: {
      translation: de,
    },
  },
  fallbackLng: "en",
  supportedLngs: ["en", "bg", "fr", "de"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;