"use strict";
// Functions
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const add = (a, b) => {
    return a + b;
};
add.description = 'This function is for adding two numbers';
const getUser = (requestData) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        name: 'Rakib',
        email: 'rakib@gmail.com',
        userId: requestData.userId,
    };
});
getUser.url = 'https://api.github.com/users';
getUser.method = 'GET';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getUser({ userId: 100 });
    // console.log(user);
}))();
function fn(ctor) {
    return new ctor('Hello world!');
}
class FnClass {
    constructor(param) {
        return { param };
    }
}
const result = fn(FnClass);
// console.log(result);
// Generic function
function getFirstElement(param) {
    return param[0];
}
console.log(getFirstElement([1, 2, 3, 4, 5]));
function getAllTheKeys(param) {
    return Object.keys(param[0]);
}
const obj = getAllTheKeys([
    {
        name: 'Rakib',
        age: 21,
    },
]);
console.log(obj);
