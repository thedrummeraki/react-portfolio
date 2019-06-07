import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from './translations/en/common.json';
import fr from './translations/fr/common.json';
import ja from './translations/ja/common.json';

const resources = {
  en: en,
  fr: fr,
  ja: ja
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
