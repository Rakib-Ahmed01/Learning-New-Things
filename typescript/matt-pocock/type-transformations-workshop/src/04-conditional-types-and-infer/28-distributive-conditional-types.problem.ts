import { Equal, Expect } from '../helpers/type-utils';

type Fruit = 'apple' | 'banana' | 'orange';

// type AppleOrBanana = Extract<Fruit, 'apple' | 'banana'>;
// type AppleOrBanana = Fruit extends infer TFruit
//   ? TFruit extends 'apple' | 'banana'
//     ? TFruit
//     : never
//   : never;

type GetAppleOrBanana<T> = T extends 'apple' | 'banana' ? T : never;

type AppleOrBanana<T> = T extends Fruit ? T : never;

type tests = [
  Expect<Equal<AppleOrBanana<'apple' | 'banana'>, 'apple' | 'banana'>>
];
