// The following exercise contains the following subjects:
// ● reduce method
// Instructions
// Write the following functions using the reduce built-in function.
// 1. max

/**
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The maximum number in the array.
 */
function max(arr) {
  return arr.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });
}

console.log(max([1, 3, 2]));

// 2. the sum of even numbers

/**
 *
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The sum of all even numbers in the array.
 */
function sumOfEven(arr) {
  return arr.reduce((acc, cur) => {
    const accEven = acc % 2 === 0 ? acc : 0;

    const curEven = cur % 2 === 0 ? cur : 0;

    return accEven + curEven;
  });
}

console.log(sumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 3. average

/**
 *
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The average of all numbers in the array.
 */
function average(arr) {
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });

  return sum / arr.length;
}

console.log(average([1, 2, 3]));
