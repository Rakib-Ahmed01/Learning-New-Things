import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';

const app = express();
const port = 8080;

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(compression());
app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Typescript with Node.js');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
