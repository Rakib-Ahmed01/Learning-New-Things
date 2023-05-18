import { Equal, Expect } from '../helpers/type-utils';

const testingFrameworks = {
  vitest: {
    label: 'Vitest',
  },
  jest: {
    label: 'Jest',
  },
  mocha: {
    label: 'Mocha',
  },
} as const;

type TestingFramework = unknown;

type tests = [Expect<Equal<TestingFramework, 'vitest' | 'jest' | 'mocha'>>];
