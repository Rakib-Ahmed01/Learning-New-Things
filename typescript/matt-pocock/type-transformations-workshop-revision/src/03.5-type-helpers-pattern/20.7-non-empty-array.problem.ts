type NonEmptyArray = unknown;

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

// @ts-expect-error
makeEnum([]);

type Name = { name: string };
type Age = { age: number };

const obj: Name & Age = { name: 'foo', age: 20 };
