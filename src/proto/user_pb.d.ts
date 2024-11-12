import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as proto_enum_pb from '../proto/enum_pb'; // proto import: "proto/enum.proto"


export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class UserPaginationRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): UserPaginationRequest;

  getPageLimit(): number;
  setPageLimit(value: number): UserPaginationRequest;

  getSearch(): string;
  setSearch(value: string): UserPaginationRequest;

  getRoleList(): Array<proto_enum_pb.Role>;
  setRoleList(value: Array<proto_enum_pb.Role>): UserPaginationRequest;
  clearRoleList(): UserPaginationRequest;
  addRole(value: proto_enum_pb.Role, index?: number): UserPaginationRequest;

  getStatusUserList(): Array<proto_enum_pb.StatusUser>;
  setStatusUserList(value: Array<proto_enum_pb.StatusUser>): UserPaginationRequest;
  clearStatusUserList(): UserPaginationRequest;
  addStatusUser(value: proto_enum_pb.StatusUser, index?: number): UserPaginationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPaginationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserPaginationRequest): UserPaginationRequest.AsObject;
  static serializeBinaryToWriter(message: UserPaginationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPaginationRequest;
  static deserializeBinaryFromReader(message: UserPaginationRequest, reader: jspb.BinaryReader): UserPaginationRequest;
}

export namespace UserPaginationRequest {
  export type AsObject = {
    page: number,
    pageLimit: number,
    search: string,
    roleList: Array<proto_enum_pb.Role>,
    statusUserList: Array<proto_enum_pb.StatusUser>,
  }
}

export class UserFindIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserFindIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindIdRequest): UserFindIdRequest.AsObject;
  static serializeBinaryToWriter(message: UserFindIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindIdRequest;
  static deserializeBinaryFromReader(message: UserFindIdRequest, reader: jspb.BinaryReader): UserFindIdRequest;
}

export namespace UserFindIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class UserStatusRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserStatusRequest;

  getStatusUser(): proto_enum_pb.StatusUser;
  setStatusUser(value: proto_enum_pb.StatusUser): UserStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserStatusRequest): UserStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UserStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserStatusRequest;
  static deserializeBinaryFromReader(message: UserStatusRequest, reader: jspb.BinaryReader): UserStatusRequest;
}

export namespace UserStatusRequest {
  export type AsObject = {
    userId: number,
    statusUser: proto_enum_pb.StatusUser,
  }
}

export class UserResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UserResponse;
  hasUser(): boolean;
  clearUser(): UserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UsersResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UsersResponse;
  clearUsersList(): UsersResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
  static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersResponse;
  static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class CreateUserRequest extends jspb.Message {
  getFirstname(): string;
  setFirstname(value: string): CreateUserRequest;

  getLastname(): string;
  setLastname(value: string): CreateUserRequest;

  getGender(): proto_enum_pb.Gender;
  setGender(value: proto_enum_pb.Gender): CreateUserRequest;

  getRole(): proto_enum_pb.Role;
  setRole(value: proto_enum_pb.Role): CreateUserRequest;

  getBirthday(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthday(value?: google_protobuf_timestamp_pb.Timestamp): CreateUserRequest;
  hasBirthday(): boolean;
  clearBirthday(): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    firstname: string,
    lastname: string,
    gender: proto_enum_pb.Gender,
    role: proto_enum_pb.Role,
    birthday?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UpdateUserRequest;

  getFirstname(): string;
  setFirstname(value: string): UpdateUserRequest;

  getLastname(): string;
  setLastname(value: string): UpdateUserRequest;

  getGender(): proto_enum_pb.Gender;
  setGender(value: proto_enum_pb.Gender): UpdateUserRequest;

  getRole(): proto_enum_pb.Role;
  setRole(value: proto_enum_pb.Role): UpdateUserRequest;

  getBirthday(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthday(value?: google_protobuf_timestamp_pb.Timestamp): UpdateUserRequest;
  hasBirthday(): boolean;
  clearBirthday(): UpdateUserRequest;

  getStatusUser(): proto_enum_pb.StatusUser;
  setStatusUser(value: proto_enum_pb.StatusUser): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    userId: number,
    firstname: string,
    lastname: string,
    gender: proto_enum_pb.Gender,
    role: proto_enum_pb.Role,
    birthday?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    statusUser: proto_enum_pb.StatusUser,
  }
}

export class CreateUserCustomerRequest extends jspb.Message {
  getFirstname(): string;
  setFirstname(value: string): CreateUserCustomerRequest;

  getLastname(): string;
  setLastname(value: string): CreateUserCustomerRequest;

  getGender(): proto_enum_pb.Gender;
  setGender(value: proto_enum_pb.Gender): CreateUserCustomerRequest;

  getBirthday(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthday(value?: google_protobuf_timestamp_pb.Timestamp): CreateUserCustomerRequest;
  hasBirthday(): boolean;
  clearBirthday(): CreateUserCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserCustomerRequest): CreateUserCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserCustomerRequest;
  static deserializeBinaryFromReader(message: CreateUserCustomerRequest, reader: jspb.BinaryReader): CreateUserCustomerRequest;
}

export namespace CreateUserCustomerRequest {
  export type AsObject = {
    firstname: string,
    lastname: string,
    gender: proto_enum_pb.Gender,
    birthday?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateUserCustomerRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UpdateUserCustomerRequest;

  getFirstname(): string;
  setFirstname(value: string): UpdateUserCustomerRequest;

  getLastname(): string;
  setLastname(value: string): UpdateUserCustomerRequest;

  getGender(): proto_enum_pb.Gender;
  setGender(value: proto_enum_pb.Gender): UpdateUserCustomerRequest;

  getBirthday(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthday(value?: google_protobuf_timestamp_pb.Timestamp): UpdateUserCustomerRequest;
  hasBirthday(): boolean;
  clearBirthday(): UpdateUserCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserCustomerRequest): UpdateUserCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserCustomerRequest;
  static deserializeBinaryFromReader(message: UpdateUserCustomerRequest, reader: jspb.BinaryReader): UpdateUserCustomerRequest;
}

export namespace UpdateUserCustomerRequest {
  export type AsObject = {
    userId: number,
    firstname: string,
    lastname: string,
    gender: proto_enum_pb.Gender,
    birthday?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class User extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): User;

  getFirstname(): string;
  setFirstname(value: string): User;

  getLastname(): string;
  setLastname(value: string): User;

  getGender(): proto_enum_pb.Gender;
  setGender(value: proto_enum_pb.Gender): User;

  getRole(): proto_enum_pb.Role;
  setRole(value: proto_enum_pb.Role): User;

  getBirthday(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthday(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasBirthday(): boolean;
  clearBirthday(): User;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreateAt(): boolean;
  clearCreateAt(): User;

  getCreateBy(): string;
  setCreateBy(value: string): User;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasUpdateAt(): boolean;
  clearUpdateAt(): User;

  getUpdateBy(): string;
  setUpdateBy(value: string): User;

  getStatusUser(): proto_enum_pb.StatusUser;
  setStatusUser(value: proto_enum_pb.StatusUser): User;

  getUsername(): string;
  setUsername(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: number,
    firstname: string,
    lastname: string,
    gender: proto_enum_pb.Gender,
    role: proto_enum_pb.Role,
    birthday?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createBy: string,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateBy: string,
    statusUser: proto_enum_pb.StatusUser,
    username: string,
  }
}

