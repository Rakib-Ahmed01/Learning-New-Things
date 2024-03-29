import { Equal, Expect } from '../helpers/type-utils';

type Route =
  | {
      route: '/';
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: '/about'; search: {} }
  | { route: '/admin'; search: {} }
  | { route: '/admin/users'; search: {} };

// type RoutesObject = {
//   [R in keyof Route as Route['route']]: Extract<Route['search'], { route: R }>;
// };

type RoutesObject = unknown;

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': {
          page: string;
          perPage: string;
        };
        '/about': {};
        '/admin': {};
        '/admin/users': {};
      }
    >
  >
];
