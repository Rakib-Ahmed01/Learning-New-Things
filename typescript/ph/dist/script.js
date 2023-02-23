"use strict";
var _a;
console.log('Bismillah...');
// primitive values - number, string, boolean
// union type and type infer in ts
let nam = 'Rakib';
const myName = 'Rakib';
let arr = ['string', 123, true, ['string', 123, true], null];
arr.push(null);
console.log(arr);
// let age: number | string = 54;
// age = '54';
let hasGf = false;
// array and tuple
let players = ['Messi', 'Ronaldo'];
players.push('Neymar');
const newPlayers = players.map((player, idx) => `${idx + 1}. ${player}`);
console.log(players, newPlayers);
// let tuple: (string | number | boolean)[] = ['string', 34, true];
let tuple = ['string', 34, true];
// tuple[0] = 50;
let arr2;
let player;
player = {
    name: 'Rakib',
    age: 20,
    isMarried: false,
    clubs: ['Barcelona'],
};
player.isMarried = true;
player.age = player.age + 5;
// player.country = 'Bangladesh';
(_a = player === null || player === void 0 ? void 0 : player.clubs) === null || _a === void 0 ? void 0 : _a.forEach((club) => console.log(club));
console.log(player);
// enum
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
console.log(Color);
let red = Color.Red;
console.log(red);
var Configs;
(function (Configs) {
    Configs["API_Key"] = "api_key";
    Configs["Domain_Name"] = "domain_name";
    Configs["Port"] = "port";
})(Configs || (Configs = {}));
console.log(Configs.Port);
// function type - return, parameter, anonymous, callback
// funtion signature, optional, default parameter
// add(a: number, b: number): number
function addition(a = 0, b = 0, c = 0) {
    // return c ? a + b + c : a + b;
    return a + b + c;
}
console.log(addition(5, 6));
// anonymous function
const log = (anything) => {
    console.log(anything);
};
// callback function
function calculate(a, b, operation) {
    const result = operation(a, b);
    return result;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
const sum = calculate(6464, 6464, add);
console.log(sum);
// day time enum
var timeOfDay;
(function (timeOfDay) {
    timeOfDay["Morning"] = "Morning";
    timeOfDay["Afternoon"] = "Afternoon";
    timeOfDay["Evening"] = "Evening";
    timeOfDay["Night"] = "Night";
})(timeOfDay || (timeOfDay = {}));
// function signature
let greet;
greet = function (personName, timeOfDay) {
    return `Good ${timeOfDay}, Mr. ${personName}...`;
};
console.log(greet('Rakib', timeOfDay.Afternoon));
let myName2 = 'Rakib';
console.log(myName2.toUpperCase());
const strArr = [];
strArr.push('Rakib');
console.log(strArr);
const tupleArr = ['Rakib', 20];
const [myname, age] = tupleArr;
console.log({ myname, age });
const person = {
    name: 'Rakib',
    age: 20,
    phone: '01910492298',
    address: { parmanentAddress: 'Kushtia', presentAddress: 'Kushtia' },
    favourites: [
        { type: 'color', value: 'black' },
        { type: 'food', value: 'beef' },
    ],
};
console.log(person);
const name2 = 'Rakib';
const myage = 22;
