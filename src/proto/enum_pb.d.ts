import * as jspb from 'google-protobuf'



export class StatusResponse extends jspb.Message {
  getResponse(): Response;
  setResponse(value: Response): StatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    response: Response,
  }
}

export enum StatusUser { 
  ACTIVE = 0,
  INACTIVE = 1,
  DELETE = 2,
}
export enum Gender { 
  UNKNOWN = 0,
  MALE = 1,
  FEMALE = 2,
}
export enum Role { 
  CUSTOMER = 0,
  EMPLOYEE = 1,
  ADMIN = 2,
  SUPERADMIN = 3,
}
export enum Response { 
  OK = 0,
  ERROR = 1,
}
