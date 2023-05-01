// The Basic
const nam: string = 'Rakib Ahmed';

// Everyday Types
type isMarried = true | false;
//     ^? // It's not true | false, It's boolean. Why? - It is an example of Structural Typing.

// Literal Inference
const handleRequest = (url: string, method: string) => {};

const req: { url: string; method: 'GET' | 'POST' } = {
  url: 'https://example.com',
  method: 'GET',
};
handleRequest(req.url, req.method);

const id: string | null = null;

// Type Narrowing

// typeof
function log(param: unknown) {
  if (typeof param === 'undefined') {
  }
}

// type predicate
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const pet = isFish({ fly() {} });

// Discriminated Unions
type ActionTypes =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; data: string }
  | { type: 'FETCH_FAILURE'; error: string };

const startAction: ActionTypes = {
  type: 'FETCH_START',
};

const successAction: ActionTypes = {
  type: 'FETCH_SUCCESS',
  data: 'data',
};

const failureAction: ActionTypes = {
  type: 'FETCH_FAILURE',
  error: 'error',
};
