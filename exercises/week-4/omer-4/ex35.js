// JavaScript – occurences
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// counter + 1 is not assigned to counter

// 2. Which debug method did you use to find the bug?
// Google Chrome F12 Console
// This code does not generate any error

// 3. Explain the bug in your own words.
// counter + 1 is not assigned to counter

// 4. Fix the code and submit it all.


function countOccurrences (str, char){
let counter = 0 ;
for ( let i = 0 ; i < str .length; i ++ ){
if ( str . charAt ( i ) === char ){
counter = counter + 1 ;
}
} return counter ;
}
console.log(countOccurrences ( "ini mini miny moe" , "n" ));
