"use strict";
function adds(n1, n2) {
    return n1 + n2;
}
//this function return void because it don't return any value
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(adds(3, 5));
//function types are types that decribes a function
var combineValus;
combineValus = add;
// combineValus = printResult; errored
function addAndHandle(n1, n2, cb) {
    cb(n1 + n2);
}
;
addAndHandle(10, 20, function (result) { console.log(result); });
