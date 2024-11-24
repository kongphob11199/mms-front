import 'dayjs/locale/th';
import dayjs, { Dayjs } from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

dayjs.extend(buddhistEra);

export default class AdapterDayjsTh extends AdapterDayjs {
  constructor({ locale, formats }: any) {
    super({ locale, formats });
  }
  formatByString = (date: Dayjs, format: string) => {
    const newFormat = format.replace(/\bYYYY\b/g, 'BBBB');
    return dayjs(date).format(newFormat);
  };
}
