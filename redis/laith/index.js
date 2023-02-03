const express = require('express');
const redis = require('redis');
const axios = require('axios');

const redisClient = redis.createClient();

const app = express();

app.use(express.json());

redisClient.connect().catch((err) => console.log(err));

app.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params;

  const cachedPost = await redisClient.get(`post:${postId}`);

  if (cachedPost) {
    return res.json(JSON.parse(cachedPost));
  } else {
    const { data: post } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    redisClient.set(`post:${postId}`, JSON.stringify(post));
    res.json(post);
  }
});

app.listen(3000, console.log('app is listening on port 3000'));
