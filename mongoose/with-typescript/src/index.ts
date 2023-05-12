import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Mongoose with TypeScript!' });
});

app.listen(8080, () => {
  console.log(`server listening on port 8080`);
});
