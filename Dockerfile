FROM node:alpine as node-angular-cli

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

RUN npm run test

WORKDIR /app/dist/HelloWorld-Angular

EXPOSE 80
ENV PORT 80
RUN npm install http-server -g
CMD [ "http-server" ]