import { S } from 'ts-toolbelt';
import { Equal, Expect } from '../helpers/type-utils';

type UserPath = '/users/:id';

type UserOrganisationPath = '/users/:id/organisations/:organisationId';

type ExtractPathParams = S.Split<UserOrganisationPath, '/:'>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
