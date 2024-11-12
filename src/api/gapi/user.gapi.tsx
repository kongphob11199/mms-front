import { CreateUserCustomerRequest, Empty, UsersResponse } from '../../proto/user_pb';
import { UserServiceClient } from '../../proto/UserServiceClientPb';

const EnvoyURL = 'http://localhost:8080';
const client = new UserServiceClient(EnvoyURL);

export const userGRPC = {
  // :Promise<UsersResponse>
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
          console.log('222 response', response.toObject());
          resolve(response.toObject());
        }
      });
    });
  },
};
