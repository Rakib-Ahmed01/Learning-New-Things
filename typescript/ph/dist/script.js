"use strict";
// console.log('Bismillah...');
// let user: User | null = null;
let user = {};
console.log('Before', user);
user = {
    name: 'Rakib',
    id: 1,
    email: 'rakib@gmail.com',
};
console.log('After', user);
const array = [];
array.push('Rakib');
console.log(array);
// Dom Manipulation
const submitBtn = document.getElementById('submit-btn');
const input = document.getElementById('input');
const main = document.getElementById('main');
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicked', input === null || input === void 0 ? void 0 : input.value);
    const target = e.target;
    const x = target === null || target === void 0 ? void 0 : target.parentNode;
    console.log(x);
    const div = document.createElement('div');
    div.style.fontFamily = 'Karla';
    div.innerHTML = `
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores animi vero eveniet aperiam eligendi a.</p>
  `;
    main === null || main === void 0 ? void 0 : main.appendChild(div);
});
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.click();
