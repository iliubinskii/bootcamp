// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result of three
// arithmetic operations in sequence. Start with a number, then add 5,
// multiply by 3, and finally subtract 2.

/**
 * @param {number} num
 */
function arithmeticChain(num) {
  new Promise(
    /**
     * @param {(value: number) => void} resolve
     */
    (resolve) => {
      resolve(num);
    }
  )
    .then((result) => result + 5)
    .then((result) => result * 3)
    .then((result) => result - 2)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

arithmeticChain(1);

// Exercise 2: String Manipulation
// Write a promise chain that takes a string, converts it to uppercase, then reverses it,
// and finally appends the string "-finished" at the end. Log the final result.
// Use `then` for every phase

/**
 * @param {string} str
 */
function stringChain(str) {
  new Promise(
    /**
     * @param {(value: string) => void} resolve
     */
    (resolve) => {
      resolve(str);
    }
  )
    .then((result) => result.toUpperCase())
    .then((result) => result.split("").reverse().join(""))
    .then((result) => `${result}-finished`)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

stringChain("abc");

// Exercise 3: Array Filtering and Mapping
// Write a function compareToNum that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10 (reject otherwise)

/**
 *
 * @param {{ num: number, isAboveNum: number }} param0
 * @returns
 */
function compareToNum({ num, isAboveNum }) {
  return num > isAboveNum ? Promise.resolve() : Promise.reject();
}

compareToNum({ num: 10, isAboveNum: 5 })
  .then((result) => console.log("Resolved", result))
  .catch((error) => console.log("Rejected", error));

compareToNum({ num: 10, isAboveNum: 12 })
  .then((result) => console.log("Resolved", result))
  .catch((error) => console.log("Rejected", error));

// Exercise 4: Delayed Greetings
// Simulate a delayed greeting with promises.
// First, wait 2 seconds, then log "Hello",
// wait another second, and log "World!".
// Each step should be done in a separate .then().

function delayedGreetings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello");
      resolve();
    }, 2000);
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("World!");
        resolve();
      }, 1000);
    });
  });
}

delayedGreetings().then(() => {
  console.log("Resolved");
});

// Exercise 5: Error Handling
// Create a promise chain that attempts to parse JSON data.
// Use a try/catch block within a .then() method to handle JSON parsing errors.
// If successful, log the parsed object; if an error occurs, log "Invalid JSON".
// Bonus
// Make an async await version

/**
 * @param {string} jsonStr
 */
async function parseJson(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (err) {
    console.log("Invalid JSON");
  }
}

// Exercise 6: Promise all
// Create "resolveImmediate" that resolves immediately to a number

function resolveImmediate() {
  return Promise.resolve(1);
}

// Create "resolveDelayed" that resolves to a number after 2 seconds

function resolveDelayed() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}

function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}

// // `fetchX()` should return a promise that is resolved to 25 immediately
// // and `fetchY()` should return a promise that is resolved after 2 seconds to 17

combine(resolveImmediate(), resolveDelayed()).then((sum) => {
  console.log(sum);
});
