// 1. Write a function called ‘countryInfo’ which takes three
// parameters: 'country', 'population' and 'capitalCity'. Based
// on this input, the function returns a string with this format:
// ‘Spain has 47 million people and its capital city is Madrid’

function countryInfo(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different
// variables, and log them to the console.

console.log(countryInfo("Germany", 83, "Berlin"));
console.log(countryInfo("Greece", 10, "Athens"));
console.log(countryInfo("England", 56, "London"));
