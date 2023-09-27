import express, { Router } from 'express';
import { bookRouter } from '../modules/book/book.route';

export const router = express.Router();

type Route = {
  path: string;
  router: Router;
};

const routes: Route[] = [
  {
    path: '/books',
    router: bookRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.router));
