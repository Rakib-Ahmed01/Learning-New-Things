FROM node:20-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=secret

COPY ./app ./todo/

WORKDIR /todo/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
