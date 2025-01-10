import { Metadata } from 'grpc-web';
import { getToken } from '../../utils/app-utils';

export const metaDataGrpc = (metadata: Metadata = {}) => {
  const token = getToken();
  if (token) {
    metadata['authorization'] = `Bearer ${token}`;
  }
  return metadata;
};

export const EnvoyURL = process.env.REACT_APP_ENVOY_URL || '';

// user
export const userGender = ['UNKNOWN', 'MALE', 'FEMALE'];
export const userRole = ['CUSTOMER', 'EMPLOYEE', 'ADMIN', 'SUPERADMIN'];
export const userStatusUser = ['ACTIVE', 'INACTIVE', 'DELETE'];
