import { generalEN } from './general/general.en';
import menuLocaleEN from './menu/menu.json';
import registerEN from './register/register.json';

export const localeEN = {
  NOOPTION: 'No data found',
  ...menuLocaleEN,
  ...registerEN,
  ...generalEN,
};
