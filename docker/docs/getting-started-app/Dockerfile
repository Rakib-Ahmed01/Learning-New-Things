FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY src ./src

RUN yarn install --production

EXPOSE 3000

CMD [ "node", "src/index.js" ]