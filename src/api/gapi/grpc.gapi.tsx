import { Metadata } from 'grpc-web';
import { getToken } from '../../utils/app-utils';

export const metaDataGrpc = (metadata: Metadata = {}) => {
  const token = getToken();
  if (token) {
    metadata['Authorization'] = `Bearer ${token}`;
  }
  return metadata;
};
