"use strict";
console.log('Bismillah...');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
function add(a, b) {
    console.log(+a + +b);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    add(+input1.value, +input2.value);
});
