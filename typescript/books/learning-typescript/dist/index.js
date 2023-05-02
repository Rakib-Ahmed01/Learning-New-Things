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
