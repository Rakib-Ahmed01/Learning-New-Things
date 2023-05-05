interface Poet {
  readonly author: string;
}

interface HasBothFunctionTypes {
  property: () => void;
  method(): void;
}

const hasBoth: HasBothFunctionTypes = {
  property() {},
  method: () => {},
};

type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

interface IndexSignature {
  zero: 0;
  [key: string]: number;
  [key: number]: number;
}

const obj: IndexSignature = {
  zero: 0,
};

interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string;
}

// Interface Merging
interface Merged {
  firstName: string;
}

interface Merged {
  lastName: string;
}

const names: Merged = {
  firstName: 'John',
  lastName: 'Doe',
};
