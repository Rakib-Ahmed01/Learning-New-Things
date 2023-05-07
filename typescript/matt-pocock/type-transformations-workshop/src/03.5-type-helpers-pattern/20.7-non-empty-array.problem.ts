type NonEmptyArray<T> = [T, ...T[]];

export const makeEnum = <T>(values: NonEmptyArray<T>) => {
  return [...values] as const;
};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);
const nums = makeEnum([1, 2, 3, 4]);

nums;

// @ts-expect-error
makeEnum([]);
