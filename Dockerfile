# syntax=docker/dockerfile:1

FROM node:12-alpine
WORKDIR /app

COPY ./client/package.json .
COPY ./client/package-lock.json .

RUN npm install

COPY ./client . 


CMD ["npm", "start"]
