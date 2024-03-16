// The following exercise contains the following subjects:
// ● callback functions
// Instructions
// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.

function isString(str, callback) {
  if (typeof str === 'string') {
    callback(str);
  }
}

isString('hello', console.log);
isString(1, console.log);
isString('hello 2', console.log);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

function firstWordUpperCase(str, callback) {
  const capitalized = str.replace(/\w/u, (char) => char.toUpperCase());

  callback(capitalized);
}

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.

firstWordUpperCase(' hello world ', console.log);

// 4. Create your own function that will receive from one of its
// arguments a callback function

function myFunction(callback) {
  callback();
}
