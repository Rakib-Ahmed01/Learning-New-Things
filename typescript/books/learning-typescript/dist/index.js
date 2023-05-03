"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.country = void 0;
let something;
//     ^?
something = 'something';
// ^?
something.toUpperCase();
// ^?
something = 12345;
// something.toUpperCase(); // Cannot do it
exports.country = 'Bangladesh';
const hasBoth = {
    firstName: 'Rakib',
    lastName: 'Ahmed',
};
const firstName = hasBoth;
const lastName = hasBoth;
console.log(firstName);
let user1 = { name: 'John', age: 20, email: 'john@gmail.com' };
function isUser(user) {
    return user.email !== undefined && user.id !== undefined;
}
if (isUser(user1)) {
    console.log('user1 is User');
}
else {
    console.log('user1 is person');
}
