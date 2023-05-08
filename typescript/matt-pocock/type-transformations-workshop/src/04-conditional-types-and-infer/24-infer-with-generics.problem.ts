import { Equal, Expect } from '../helpers/type-utils';

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  'click',
  'window',
  'my-event',
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];

type First<T> = T extends (args: infer TArgs) => any ? TArgs : never;

type tests2 = [Expect<Equal<First<(num: boolean) => number>, boolean>>];

type Last<T> = T extends [any, infer TLast] ? TLast : never;

type tests3 = [Expect<Equal<Last<[number, string]>, string>>];

type UnionToIntersection<T> = unknown;

type TypeA = { a: number };
type TypeB = { b: string };
type TypeC = { c: boolean };

type Union = TypeA | TypeB | TypeC;

type Intersect = UnionToIntersection<Union>; // expected type: TypeA & TypeB & TypeC
