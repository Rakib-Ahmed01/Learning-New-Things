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
let a;
a = 'dfd';
// array
let arr = [];
arr.push('fdsf', 'gfhfg', 454);
console.log(arr);
// object
let obj;
obj = {
    name: 'Rakib',
};
console.log(obj);
// function
let func;
func = () => {
    console.log('inside func');
};
func();
function sum(a, b, c = 'op') {
    console.log(c);
    console.log(`a - ${a} - b - ${b}`);
    return c + a + b;
}
sum('cvxv', 'fdg', 'big bro');
const userDetails = (id, user) => {
    console.log(`user id id ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr'} ${user.name}`);
};
userDetails(1, { name: 'Rakib', age: 20 });
sayHello({ name: 'Rakib', age: 677 });
// function signature
let add;
add = function (x, y) {
    return x + y;
};
// class
const captain = new Player('Mashrafi', 40);
console.log({ captain });
// captain.name = 'Rakib';
// console.log(captain.age);
const players = [];
