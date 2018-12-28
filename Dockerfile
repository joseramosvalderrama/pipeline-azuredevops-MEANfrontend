FROM node:alpine as node-angular-cli

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

EXPOSE 8000
ENV PORT 8000
CMD ["node","index.js"]


