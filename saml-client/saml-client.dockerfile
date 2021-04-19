FROM node:14-alpine
EXPOSE 443

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
RUN apk upgrade --update-cache --available && \
    apk add openssl && \
    rm -rf /var/cache/apk/*
RUN npm install -g nodemon
COPY generate-certs.sh /app/generate-certs.sh
COPY config /app/config
COPY package*.json ./
RUN npm install
COPY src /app/src

CMD npm start

