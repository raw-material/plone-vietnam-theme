import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./locales/it";
import en from "./locales/en";

const resources = {
  en: {
    translation: en,
  },
  it: {
    translation: it,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "it",
  supportedLngs: ["en", "it"],
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
