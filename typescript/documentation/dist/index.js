"use strict";
// The Basic
const nam = 'Rakib Ahmed';
//     ^? // It's not true | false, It's boolean. Why? - It is an example of Structural Typing.
// Literal Inference
const handleRequest = (url, method) => { };
const req = {
    url: 'https://example.com',
    method: 'GET',
};
handleRequest(req.url, req.method);
const id = null;
// Type Narrowing
// typeof
function log(param) {
    if (typeof param === 'undefined') {
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
const pet = isFish({ fly() { } });
const startAction = {
    type: 'FETCH_START',
};
const successAction = {
    type: 'FETCH_SUCCESS',
    data: 'data',
};
const failureAction = {
    type: 'FETCH_FAILURE',
    error: 'error',
};
