import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
  '/api/v1/auth',
  createProxyMiddleware({
    target: 'http://localhost:8000',
    logProvider: () => {
      return {
        log: console.log,
        info: console.info,
      };
    },
    logLevel: 'info',
  })
);

app.use(
  '/api/v1/books',
  createProxyMiddleware({
    target: 'http://localhost:8001',
  })
);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
