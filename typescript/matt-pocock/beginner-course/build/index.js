"use strict";
console.log('Bismillah...');
const boxStr = { value: 'foo' };
const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
const obj = {
    rakib: { name: 'Rakib', age: 20 },
};
console.log(obj['rakib']);
function add(a, c, b) {
    if (!c) {
        return a + b;
    }
    return a + b + c;
}
console.log(add('1', '2', '3'));
console.log(add('1', '2', undefined));
