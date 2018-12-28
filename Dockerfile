FROM node:alpine as node-angular-cli

WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm npm install typescript@'>=2.7.0 <2.8.0'
COPY . /app

RUN npm run build

EXPOSE 8000
ENV PORT 8000
CMD ["node","index.js"]


