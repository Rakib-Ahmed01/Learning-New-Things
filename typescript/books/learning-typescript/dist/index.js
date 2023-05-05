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
// const user2: User = { name: 'John', id: 1, email: 'john@gmail.com', job: 'Web Developer' }; // ERROR!!! Object literal may only specify known properties, and 'job' does not exist in type 'User'.
const user2 = {
    name: 'John',
    id: 1,
    email: 'john@gmail.com',
    job: 'Web Developer',
};
const userWithExtraProperties = user2;
console.log(userWithExtraProperties);
function getTheSameUser(user) {
    return user;
}
getTheSameUser({
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    job: 'Web Developer',
}); // Error!!
getTheSameUser(user2);
function isUser(user) {
    return user.email !== undefined && user.id !== undefined;
}
if (isUser(user1)) {
    console.log('user1 is User');
}
else {
    console.log('user1 is person');
}
