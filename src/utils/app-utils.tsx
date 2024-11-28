import { KEY_STORAGE } from '../constants/common';

export const getToken = () => {
  return localStorage.getItem(KEY_STORAGE.TOKEN) || null;
};

export const setToken = (token: string) => {
  localStorage.setItem(KEY_STORAGE.TOKEN, token);
};
