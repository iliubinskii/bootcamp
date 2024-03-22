// JavaScript – closures
// The following exercise contains the following subjects:
// ● closures
// Instructions
// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.
// Block 1

var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2); // result = 5
// someFunction assigns 5 to global variable b and returns otherFunction
// otherFunction returns global variable b

// Block 2

var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a); // a = 1
// a function inside b2 function shadows global variable a
// Therefore 10 is assigned to local variable, while global variable a remains unchanged

// Block 3

let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100); // 3 3 3
// all logs are executed with 100ms delay, after the loop is finished and i is equal to 3
}
