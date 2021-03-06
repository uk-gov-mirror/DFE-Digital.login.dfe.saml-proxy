FROM node:14
EXPOSE 443

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./
RUN npm install
COPY src /app/src

CMD npm start

