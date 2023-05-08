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

type RoutesObject = {
  [R in Route['route']]: Extract<Route, { route: R }>['search'];
};

{
  route: '/about';
  search: {
  }
}
// R - '/about'
type RoutesObject2 = {
  [R in Route as R['route']]: R;
};

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
