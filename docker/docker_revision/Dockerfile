FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --omit=dev; \
    fi

COPY server.js .

ENV PORT=3000

EXPOSE ${PORT}

CMD [ "npm", "run", "dev" ]