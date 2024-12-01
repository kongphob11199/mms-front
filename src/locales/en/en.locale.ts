import { generalEN } from './general/general.en';
import menuLocaleEN from './menu/menu.json';
import registerEN from './auth/register/register.json';
import loginEn from './auth/login/login.json';

export const localeEN = {
  NOOPTION: 'No data found',
  ...menuLocaleEN,
  ...registerEN,
  ...generalEN,
  ...loginEn
};
