#!/bin/bash

# สร้างไดเรกทอรีสำหรับเก็บไฟล์ proto ที่ compile แล้ว
mkdir -p ./src/proto

# Compile proto files
protoc -I=. ./proto/*.proto \
    --plugin=protoc-gen-js=./node_modules/.bin/protoc-gen-js \
    --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
    --js_out=import_style=commonjs:./src \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src

# รอรับคำสั่งก่อนปิด
read -p "Press [Enter] to continue..."
