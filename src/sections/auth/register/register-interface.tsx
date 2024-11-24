import { Dayjs } from 'dayjs';

export interface RegisterInterface {
  username: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  birth: Dayjs | null;
  gender: string;
}
