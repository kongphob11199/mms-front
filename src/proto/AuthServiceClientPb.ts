/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: proto/auth.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_auth_pb from '../proto/auth_pb'; // proto import: "proto/auth.proto"
import * as proto_enum_pb from '../proto/enum_pb'; // proto import: "proto/enum.proto"


export class AuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/pb.AuthService/Login',
    grpcWeb.MethodType.UNARY,
    proto_auth_pb.LoginRequest,
    proto_auth_pb.LoginResponse,
    (request: proto_auth_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    proto_auth_pb.LoginResponse.deserializeBinary
  );

  login(
    request: proto_auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_auth_pb.LoginResponse>;

  login(
    request: proto_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_auth_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<proto_auth_pb.LoginResponse>;

  login(
    request: proto_auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_auth_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.AuthService/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.AuthService/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorCheckAuth = new grpcWeb.MethodDescriptor(
    '/pb.AuthService/CheckAuth',
    grpcWeb.MethodType.UNARY,
    proto_auth_pb.EmptyAuth,
    proto_enum_pb.StatusResponse,
    (request: proto_auth_pb.EmptyAuth) => {
      return request.serializeBinary();
    },
    proto_enum_pb.StatusResponse.deserializeBinary
  );

  checkAuth(
    request: proto_auth_pb.EmptyAuth,
    metadata?: grpcWeb.Metadata | null): Promise<proto_enum_pb.StatusResponse>;

  checkAuth(
    request: proto_auth_pb.EmptyAuth,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_enum_pb.StatusResponse) => void): grpcWeb.ClientReadableStream<proto_enum_pb.StatusResponse>;

  checkAuth(
    request: proto_auth_pb.EmptyAuth,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_enum_pb.StatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.AuthService/CheckAuth',
        request,
        metadata || {},
        this.methodDescriptorCheckAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.AuthService/CheckAuth',
    request,
    metadata || {},
    this.methodDescriptorCheckAuth);
  }

  methodDescriptorLogout = new grpcWeb.MethodDescriptor(
    '/pb.AuthService/Logout',
    grpcWeb.MethodType.UNARY,
    proto_auth_pb.EmptyAuth,
    proto_enum_pb.StatusResponse,
    (request: proto_auth_pb.EmptyAuth) => {
      return request.serializeBinary();
    },
    proto_enum_pb.StatusResponse.deserializeBinary
  );

  logout(
    request: proto_auth_pb.EmptyAuth,
    metadata?: grpcWeb.Metadata | null): Promise<proto_enum_pb.StatusResponse>;

  logout(
    request: proto_auth_pb.EmptyAuth,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_enum_pb.StatusResponse) => void): grpcWeb.ClientReadableStream<proto_enum_pb.StatusResponse>;

  logout(
    request: proto_auth_pb.EmptyAuth,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_enum_pb.StatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.AuthService/Logout',
        request,
        metadata || {},
        this.methodDescriptorLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.AuthService/Logout',
    request,
    metadata || {},
    this.methodDescriptorLogout);
  }

}

