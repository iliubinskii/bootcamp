// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
// ● scope
// ● hoisting
// Instructions
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
// Block 1

function funcA() {
console.log(a); // undefined (a is used before it is assigned)
console.log(foo()); // 2 (function foo is hoisted above this line)
var a = 1;
function foo() {
return 2;
}
}
funcA();

// Block 2
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName()); // Aurelio De Rosa ("this" refers to obj.prop)
var test = obj.prop.getFullName;
console.log(test()); // John Doe ("this" refers to global object after assigning to "test")

// Block 3

function funcB() {
let a = b = 0;
a++;
return a;
}
funcB();
console.log(typeof a); // undefined (a is defined inside the function)
console.log(typeof b); // number (b is defined in the global scope)

// Block 4

function funcC() {
console.log("1");
}
funcC(); // 2 (both functions are hoisted above this line)
function funcC() {
console.log("2");
}
funcC(); // 2

// Block 5

function funcD1() {
d = 1;
}
funcD1();
console.log(d); // 1 (d is defined in the global scope)
function funcD2() {
var e = 1;
}
funcD2();
console.log(e); // Exception (e is defined only inside the function)

// Block 6

function funcE() {
console.log("Value of f in local scope: ", f); // 1 (function is called after f being assigned)
}
console.log("Value of f in global scope: ", f); // undefined (f declaration is hoisted,
// so no exception, but it is not yet assigned)
var f = 1;
funcE();
