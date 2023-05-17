import { Equal, Expect } from '../helpers/type-utils';

const fruits = ['apple', 'orange', 'banana'] as const;

type AppleOrBanana = (typeof fruits)[number];
type Fruit = (typeof fruits)[number];

type tests = [
  Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>,
  Expect<Equal<Fruit, 'apple' | 'banana' | 'orange'>>
];
