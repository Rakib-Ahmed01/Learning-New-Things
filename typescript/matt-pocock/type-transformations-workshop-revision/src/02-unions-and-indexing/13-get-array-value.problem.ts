import { Equal, Expect } from '../helpers/type-utils';

const fruits = ['apple', 'banana', 'orange'];

type AppleOrBanana = unknown;
type Fruit = unknown;

type tests = [
  Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>,
  Expect<Equal<Fruit, 'apple' | 'banana' | 'orange'>>
];

const obj = {
  name: 'Rakib Ahmed',
  age: 21,
};

type ObjType = typeof obj;

type objTest = Expect<Equal<ObjType, { name: string; age: number }>>;

const arr = ['one', 'two', 'three', 'four'] as const;

type ArrType = (typeof arr)[number];

type arrTest = Expect<Equal<ArrType, 'one' | 'two' | 'three' | 'four'>>;
