"use strict";
exports.__esModule = true;
var name = 'Rakib Ahmed';
var id = 1;
var isPassionateAboutProgramming = true;
var anything = {
    name: name,
    id: id,
    isPassionateAboutProgramming: isPassionateAboutProgramming
};
var arr = ['JS', 'React', 'Node'];
var add = function (a, b) { return a + b; };
console.log(add(5, 5));
function printId(id) {
    if (typeof id === 'number') {
        return id;
    }
    return id.toLowerCase();
}
var bear = {
    name: 'Big Bear',
    walk: true
};
var user = {
    id: 1,
    name: 'Rakib',
    role: { role: 'admin', adminPassword: '' }
};
var user2 = {};
console.log(user2.id);
var nam = 'Rakib Ahmed';
function handleRequest(url, method) {
    return 'data';
}
var req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method);
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
var bird = {
    fly: function () { }
};
var fish = {
    swim: function () {
        return '';
    }
};
console.log(getFood(fish));
function isRakib(person) {
    return person.name === 'Rakib';
}
function investigate(person) {
    if (isRakib(person)) {
        person;
        return 'Person is Rakib';
    }
    else {
        person;
        return 'This is not Rakib';
    }
}
console.log(investigate({ name: 'Sabbir' }));
