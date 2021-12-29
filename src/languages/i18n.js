import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './english.json';
import spanish from './spanish.json';

i18n.use(initReactI18next).init({
  resources: {
    en: english,
    sp: spanish,
  },
  lng: 'en',
  react: {
    useSuspense: false, 
  },
  compatibilityJSON: 'v2',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
