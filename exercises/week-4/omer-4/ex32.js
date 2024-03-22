// JavaScript – get sum
// The following exercise contains the following subjects:
// ● find smallest
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.

function findSmallest(a, b, c){
if (a > b > c){
return c;
} else if (a > c > b) {
return a;
} else {
return b;
}
}

// findSmalest(52,66, 2);
// Uncaught ReferenceError: findSmalest is not defined
//     at ex32.js:22:1

// 2. Which debug method did you use to find the bug?
// Google Chrome F12 Console

// 3. Explain the bug in your own words.
// Function is undefined because of misspelled function
// name "findSmallest" and "findSmalest"
// Function implementation does not correspond with the function name.
// a > b > c syntax results in comparing of a boolean to a number: (a > b) > c

// 4. Fix the code and submit it all.
console.log(findSmallest(52,66, 2));
