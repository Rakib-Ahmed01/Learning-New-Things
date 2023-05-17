// type NonEmptyArray<T> = T[] & { 0: T };
type NonEmptyArray<T> = [T, ...T[]];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

const arr: NonEmptyArray<number> = [1, 2, 3, 4, 5];

arr.map((num) => num);
//                ^?

// @ts-expect-error
makeEnum([]);

type Name = { name: string };
type Age = { age: number };

const obj: Name & Age = { name: 'foo', age: 20 };
