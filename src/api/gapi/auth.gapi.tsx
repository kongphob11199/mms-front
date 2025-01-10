import { AuthServiceClient } from '../../proto/AuthServiceClientPb';
import { AuthResponse, EmptyAuth, LoginRequest, LoginResponse } from '../../proto/auth_pb';
import { EnvoyURL, metaDataGrpc } from './grpc.gapi';

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
  checkAuth: (): Promise<AuthResponse.AsObject> => {
    return new Promise((resolve, reject) => {
      const metadata = metaDataGrpc();
      const req = new EmptyAuth();
      client.checkAuth(req, metadata, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  },
};
