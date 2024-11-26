import { Gender } from '../../proto/enum_pb';

export enum gender {
  MALE = Gender.MALE,
  FEMALE = Gender.FEMALE,
  UNKNOWN = Gender.UNKNOWN,
}

export const genderOp = [
  { value: Gender.MALE, label: 'GENERAL.GENDER.MALE' },
  { value: Gender.FEMALE, label: 'GENERAL.GENDER.FEMALE' },
  { value: Gender.UNKNOWN, label: 'GENERAL.GENDER.UNKNOWN' },
];

export enum role {
  CUSTOMER = 'CUSTOMER',
  EMPLOYEE = 'EMPLOYEE',
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN',
}

export const roleOp = [
  { value: role.CUSTOMER, label: 'Customer' },
  { value: role.EMPLOYEE, label: 'Employee' },
  { value: role.ADMIN, label: 'Admin' },
  { value: role.SUPERADMIN, label: 'Super Admin' },
];
