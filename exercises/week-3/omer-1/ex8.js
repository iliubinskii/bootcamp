// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.

function percentageOfWorld1(population, countryName) {
  const pp = (population / 7900) * 100;

  const pp2 = pp.toFixed(1);

  return `${countryName} has ${population} million people, so it's about ${pp2}% of the world population.`;
}

// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.

const panama = percentageOfWorld1(4, 'Panama');

const usa = percentageOfWorld1(328, 'USA');

const china = percentageOfWorld1(1441, 'China');

console.log(panama, usa, china);

// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)

const percentageOfWorld2 = (population, countryName) => {
  const pp = (population / 7900) * 100;

  const pp2 = pp.toFixed(1);

  return `${countryName} has ${population} million people, so it's about ${pp2}% of the world population.`;
}

const congo = percentageOfWorld2(86, 'Congo');

const brazil = percentageOfWorld2(211, 'Brazil');

const india = percentageOfWorld2(1380, 'India');

console.log(congo, brazil, india);
