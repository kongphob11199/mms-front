@echo off

@REM mkdir .\src\proto

@REM --plugin=protoc-gen-js=.\node_modules\.bin\protoc-gen-js ^
@REM --plugin=protoc-gen-grpc-web=.\node_modules\.bin\protoc-gen-grpc-web ^
protoc -I=. .\proto\*.proto ^
  --js_out=import_style=commonjs:.\\src ^
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:.\\src


pause
