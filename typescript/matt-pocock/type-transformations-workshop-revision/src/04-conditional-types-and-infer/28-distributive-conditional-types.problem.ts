import { Equal, Expect } from '../helpers/type-utils';

type Fruit = 'apple' | 'banana' | 'orange';

type AppleOrBanana = unknown;

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>];
