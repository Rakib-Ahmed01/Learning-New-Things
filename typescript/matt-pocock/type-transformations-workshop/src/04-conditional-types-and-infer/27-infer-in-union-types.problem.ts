import { Equal, Expect } from '../helpers/type-utils';

const parser1 = {
  parse: () => 1,
};

const parser2 = () => '123';

const parser3 = {
  extract: () => true,
};

// type GetParserResult<T> = T extends () => infer R
//   ? R
//   : T extends { parse: () => infer R }
//   ? R
//   : T extends { extract: () => infer R }
//   ? R
//   : never;

type GetParserResult<T> = T extends
  | (() => infer R)
  | { parse: () => infer R }
  | { extract: () => infer R }
  ? R
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
