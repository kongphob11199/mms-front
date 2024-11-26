import { Dayjs } from 'dayjs';
import { Gender } from '../../../proto/enum_pb';
import { gender } from '../../../constants/info/general-info';

export interface RegisterInterface {
  username: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  birth: Dayjs | null;
  gender: { value: Gender; label: string } | null;
}
