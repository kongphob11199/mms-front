import { RESPONSE_API } from '../../constants/common';
import { CreateUserCustomerRequest, Empty, UsersResponse } from '../../proto/user_pb';
import { UserServiceClient } from '../../proto/UserServiceClientPb';

const EnvoyURL = process.env.REACT_APP_ENVOY_URL || '';
const client = new UserServiceClient(EnvoyURL);

export const userGRPC = {
  findAll: (): Promise<UsersResponse.AsObject> => {
    const req = new Empty();
    return new Promise((resolve, reject) => {
      client.findAll(req, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  },
  createUserCustomer: (req: CreateUserCustomerRequest) => {
    return new Promise((resolve, reject) => {
      client.createCustomer(req, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(RESPONSE_API[response.toObject().response]);
        }
      });
    });
  },
};
