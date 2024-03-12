// Instructions
// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// If the number is only divisible by 7 print “BOOM”

function printNumbersBoom(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i % 7 === 0 ? "BOOM" : i);
  }
}

// If the number is divisible by 7 and also includes the digit 7 print
// “BOOM-BOOM”


function printNumbersBoomBoom(n) {
  for (let i = 1; i <= n; i++)
    if (i % 7 === 0 && i.toString().includes("7")) {
      console.log("BOOM-BOOM");
    } else if (i % 7 === 0) {
      console.log("BOOM");
    } else {
      console.log(i);
    }
}
