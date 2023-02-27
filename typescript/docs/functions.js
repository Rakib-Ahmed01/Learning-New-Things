function greeter(fn) {
    fn("Assalamualaikum", 'Rakib Ahmed');
}
function log(greet, name) {
    console.log("".concat(greet, ", ").concat(name, "..."));
}
greeter(log);
function firstElement(arr) {
    return arr[0] !== undefined;
}
var s = firstElement([]);
console.log(s);
function myForEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}
myForEach([1, 2, 3, 4], function (item, idx, arr) {
    console.log(item, idx, arr);
});
myForEach(['Rakib', 'Sabbir', 'Arif', 'Yeakib'], function (name, idx, names) {
    console.log(name, idx, names);
});
