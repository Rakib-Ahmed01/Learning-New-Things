import { Player } from './Player.js';

// function multiply(a: number, b: number) {
//   return a * b;
// }

// console.log(multiply(5, 5));

// // function multiply(a: number, b: number): number

// const arr = ['a', 1, true, {}];

// // arr.push('b', 2, false);

// console.log(arr);

// type Rakib = {
//   name: string;
//   age: number;
//   id: string | number;
// };

// const obj: Rakib = {
//   name: 'Rakib',
//   age: 21,
//   id: 1,
// };

// obj.age = 20;
// obj.id = 4545;

// console.log(obj.age);

// Explicit Typing and Union Types

let a: string;

a = 'dfd';

// array

let arr: (string | number)[] = [];

arr.push('fdsf', 'gfhfg', 454);

console.log(arr);

// object

let obj: {
  name: string;
  age?: number;
};

obj = {
  name: 'Rakib',
};

console.log(obj);

// function

let func: Function;

func = () => {
  console.log('inside func');
};

func();

function sum(a: string, b: string, c: string = 'op') {
  console.log(c);
  console.log(`a - ${a} - b - ${b}`);
  return c + a + b;
}

sum('cvxv', 'fdg', 'big bro');

// type alias

type StrOrNum = string | number;

type User = {
  name: string;
  age: number;
};

const userDetails = (id: StrOrNum, user: User) => {
  console.log(`user id id ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: User) => {
  console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr'} ${user.name}`);
};

userDetails(1, { name: 'Rakib', age: 20 });
sayHello({ name: 'Rakib', age: 677 });

// function signature

let add: (a: number, b: number) => number;

add = function (x: number, y: number) {
  return x + y;
};

// class

const captain = new Player('Mashrafi', 40);

console.log({ captain });

// captain.name = 'Rakib';

// console.log(captain.age);

const players: Player[] = [];
