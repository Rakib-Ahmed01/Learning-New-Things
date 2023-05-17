import { Equal, Expect } from '../helpers/type-utils';

type Names = [
  'Matt Pocock',
  'Jimi Hendrix',
  'Eric Clapton',
  'John Mayer',
  'BB King'
];

// type GetSurname<T> = T extends `${string} ${string}`
//   ? S.Split<T, ' '>[1]
//   : never;

type GetSurname<T> = T extends `${string} ${infer TInfferedLastName}`
  ? TInfferedLastName
  : never;

type name = GetSurname<Names[4]>;
//    ^?

type tests = [
  Expect<Equal<GetSurname<Names[0]>, 'Pocock'>>,
  Expect<Equal<GetSurname<Names[1]>, 'Hendrix'>>,
  Expect<Equal<GetSurname<Names[2]>, 'Clapton'>>,
  Expect<Equal<GetSurname<Names[3]>, 'Mayer'>>,
  Expect<Equal<GetSurname<Names[4]>, 'King'>>
];
