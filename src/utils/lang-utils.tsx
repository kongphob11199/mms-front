import { KEY_STORAGE } from '../constants/common';

export const getLanguageCurrent = () => {
  const lang = localStorage.getItem(KEY_STORAGE.LANGUAGE);
  return lang?.toLocaleLowerCase() || 'th';
};
