// The following exercise contains the following subjects:
// ● arrays
// ● for loop
// Instructions
// 1. Create an array containing 4 population values of 4
// countries of your choice. Store this array into a variable
// called 'populations'

const populations = [100, 50, 1500, 200];

// 2. Create a function called ‘populationPercentages’ that
// takes the population array as an argument.
// 3. Inside the function, create an empty array called
// ‘percentages’.
// 4. Use a for loop to iterate over the population array you
// received as an argument..
// 5. On each iteration use the function we created earlier
// (module 3, ex.3.3-declarations vs expressions) for each
// element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.

function populationPercentages(populations) {
  const percentages = [];

  for (let i; i < populations.length; i++)
    percentages.push((populations[i] / 7900) * 100);

  return percentages;
}
