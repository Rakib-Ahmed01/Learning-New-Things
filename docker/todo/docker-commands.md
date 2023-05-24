// create a custom network

```js
docker create network <network name>
```

// start mongodb

```js
docker run -d --rm \
--name mongodb \
-p 27017:27017 \
--net mongo-network \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=secret \
mongo
```

// start mongo-express

```js
docker run -d --rm \
--name mongo-express \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
mongo-express
```
