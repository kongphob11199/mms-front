import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { localeEN } from './locales/en/en.locale';
import { localeTH } from './locales/th/th.locale';
import { getLanguageCurrent } from './utils/lang-utils';

const resources = {
  en: { translation: localeEN },
  th: { translation: localeTH },
};

const languageCurrent = getLanguageCurrent();

i18next.use(initReactI18next).init({
  resources,
  lng: languageCurrent,
  fallbackLng: 'th',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
