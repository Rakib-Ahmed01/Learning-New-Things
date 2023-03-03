"use strict";
// const username = 'Rakib Ahmed';
// console.log(username);
const transactionObj = {
    book: 10,
    food: 50,
    gadget: 30,
};
for (let transaction in transactionObj) {
    console.log(transactionObj[transaction]);
}
console.log(transactionObj['transaction']);
let student = {
    name: 'Rakib',
    roll: 1,
    classes: [100, 200],
};
console.log(student['test']);
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
const hexColorsMap = {
    red: 'red',
    black: 'black',
};
for (let key in hexColorsMap) {
    console.log(hexColorsMap[key]);
}
