function rateProduct(product: string, rating: number = 0) {}

const strAndNumArr: (string | number)[] = [];

strAndNumArr.push(1, 2, 3, 4, 'str');

let values = [];

values.push(1, 2, 3);

function withElements(elements: string[]) {
  console.log(elements[9001].length); // No type error
}
withElements(["It's", 'over']);

const pairLoose = [false, 123];
const pairTupleLoose: [boolean, number] = [false, 123];

const pair = ['Rakib', 21];
//     ^?
const pair2 = ['Rakib', 21] as const;
//     ^?
const pairAlsoMutable: [number, string] = [1157, 'Tomoe'];
