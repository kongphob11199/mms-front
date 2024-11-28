import { RESPONSE_API } from '../../constants/common';
import { AuthServiceClient } from '../../proto/AuthServiceClientPb';
import { EmptyAuth, LoginRequest, LoginResponse } from '../../proto/auth_pb';
import { StatusResponse } from '../../proto/enum_pb';

const EnvoyURL = process.env.REACT_APP_ENVOY_URL || '';
const client = new AuthServiceClient(EnvoyURL);

export const authGRPC = {
  login: (req: LoginRequest): Promise<LoginResponse.AsObject> => {
    return new Promise((resolve, reject) => {
      client.login(req, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  },
  checkAuth: (): Promise<StatusResponse.AsObject> => {
    return new Promise((resolve, reject) => {
      const req = new EmptyAuth();
      client.checkAuth(req, {}, (err, response) => {});
    });
  },
};
