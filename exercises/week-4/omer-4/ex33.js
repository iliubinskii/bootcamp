// JavaScript – sum of even
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your
// eyes but to use the debugging tools we've learned!
// What is wrong with this code?

// 1. First, find the line that contains the problem. Write it down.
// ex33.js:22 Uncaught SyntaxError: Malformed arrow function parameter list (at ex33.js:22:1)

// 2. Which debug method did you use to find the bug?
// Google Chrome F12 Console

// 3. Explain the bug in your own words.
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
// This line is too far from any reasonable code.

// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:

// This function makes implication about the number of elements in the array,
// which is wrong approach.
// Also, it returns NaN, because arr[10] is undefined.
function getSumOfEven(arr){
return arr[2] + arr[4] + arr[6] + arr[8] +
arr[10];
}
getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
