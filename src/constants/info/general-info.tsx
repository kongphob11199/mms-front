export enum gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  UNKNOWN = 'UNKNOWN',
}

export const genderOp = [
  { value: gender.MALE, label: 'GENERAL.GENDER.MALE' },
  { value: gender.FEMALE, label: 'GENERAL.GENDER.FEMALE' },
  { value: gender.UNKNOWN, label: 'GENERAL.GENDER.UNKNOWN' },
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
