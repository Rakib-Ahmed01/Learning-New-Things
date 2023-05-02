// OBJECT
type Point = { x: number; y: number };
type P = keyof Point;

const p: P = 'y';

function getX(x: number | null) {
  return x!.toExponential;
  //     ^?
}
