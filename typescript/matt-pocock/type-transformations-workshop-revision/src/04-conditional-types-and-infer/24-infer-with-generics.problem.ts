import { Equal, Expect } from '../helpers/type-utils';

interface MyComplexInterface<Event, Context, Name, Point> {
  // getEvent: () => Event;
  // getContext: () => Context;
  // getName: () => Name;
  // getPoint: () => Point;
}

interface MySimpleInterface<Event, Context, Name, Point> {}

type Example = MySimpleInterface<
  'click',
  'window',
  'my-event',
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MySimpleInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
