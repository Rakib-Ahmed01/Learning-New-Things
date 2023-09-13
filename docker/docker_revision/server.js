const express = require('express');

const app = express();
const port = 5000;

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to the server! 🐱‍🏍' });
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
