FROM node:alpine as node-angular-cli

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

WORKDIR /app/dist

