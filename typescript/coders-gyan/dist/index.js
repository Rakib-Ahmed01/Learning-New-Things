"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('Bismillah...');
function log(arg) {
    console.log(arg);
    return arg;
}
const result = log('this is a test');
const x = result.replace('test', 'best');
console.log(result, x);
log([1, 2, 3, 4, 5]);
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [{ age: 40 }, { age: 50 }, { age: 30 }];
console.log(getOldest(people));
const players = [
    { age: 40, name: 'Rakib' },
    { age: 50, name: 'Rakib' },
    { age: 30, name: 'Rakib' },
];
const oldestPlayer = getOldest(players);
console.log(oldestPlayer.name);
const fetchPosts = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://api.com/${path}`);
    return res.json();
});
const fetchUsers = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://api.com/${path}`);
    return res.json();
});
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://api.com/${path}`);
    return res.json();
});
function login(credentials) {
    console.log(credentials);
    return credentials;
}
const user = {
    password: 'user',
    email: 'user@example.com',
    isAdmin: false,
};
const result2 = login(user);
console.log(result2.isAdmin);
