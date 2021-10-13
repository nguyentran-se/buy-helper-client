import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLocale from './en.json';
import vnLocale from './vn.json';
i18n
  .use(LanguageDetector)
  // pass i18n to initReactI18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', //language to use if translations in user language are not available
    debug: process.env.NODE_ENV !== 'production' ? true : false, //log i18n to debug
    ns: ['translations'], //namespace trong config resource
    defaultNS: 'translations',
    resources: {
      en: {
        translations: enLocale,
      },
      vn: {
        translations: vnLocale,
      },
    },
    // keySeparator: false //character để access các deep. default là: '.'
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
