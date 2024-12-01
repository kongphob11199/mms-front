import menuLocaleTH from './menu/menu.json';
import registerTH from './auth/register/register.json';
import { generalTH } from './general/general.th';
import loginTH from './auth/login/login.json';

export const localeTH = {
  NOOPTION: 'ไม่พบข้อมูล',
  ...menuLocaleTH,
  ...registerTH,
  ...generalTH,
  ... loginTH,
};
