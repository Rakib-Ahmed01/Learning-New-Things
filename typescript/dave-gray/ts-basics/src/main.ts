// const username = 'Rakib Ahmed';
// console.log(username);

// let a = 5;
// let b = '25';
// let c = 4;

// console.log(a * +b);

type Transaction = {
  [index: string]: number;
  book: number;
  food: number;
  gadget: number;
};

const transactionObj: Transaction = {
  book: 10,
  food: 50,
  gadget: 30,
};

for (let transaction in transactionObj) {
  console.log(transactionObj[transaction]);
}

console.log(transactionObj['transaction']);

type Student = {
  // [key: string]: number | string | undefined | number[];
  name: string;
  roll: number;
  classes?: number[];
};

let student: Student = {
  name: 'Rakib',
  roll: 1,
  classes: [100, 200],
};

console.log(student['test']);

for (let key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

const hexColorsMap: Record<string, string> = {
  red: 'red',
  black: 'black',
};

for (let key in hexColorsMap) {
  console.log(hexColorsMap[key]);
}
