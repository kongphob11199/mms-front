import menuLocaleTH from './menu/menu.json';
import registerTH from './register/register.json';
import { generalTH } from './general/general.th';

export const localeTH = {
  NOOPTION: 'ไม่พบข้อมูล',
  ...menuLocaleTH,
  ...registerTH,
  ...generalTH,
};
