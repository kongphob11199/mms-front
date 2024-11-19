import * as jspb from 'google-protobuf'

import * as proto_enum_pb from '../proto/enum_pb'; // proto import: "proto/enum.proto"


export class EmptyAuth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyAuth.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyAuth): EmptyAuth.AsObject;
  static serializeBinaryToWriter(message: EmptyAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyAuth;
  static deserializeBinaryFromReader(message: EmptyAuth, reader: jspb.BinaryReader): EmptyAuth;
}

export namespace EmptyAuth {
  export type AsObject = {
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginResponse;

  getResponse(): proto_enum_pb.Response;
  setResponse(value: proto_enum_pb.Response): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token: string,
    response: proto_enum_pb.Response,
  }
}

