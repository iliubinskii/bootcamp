// The following exercise contains the following subjects:
// ● for loop
// Instructions
// You are given two arrays:
// const food = ["Noodle", "Pasta", "Ice-cream",
// "Meat", "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza",
// "Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

function compare(food, food1) {
  const result = [];

  for (let i = 0; i < food.length; i++) {
    for (let j = 0; j < food1.length; j++) {
      if (food[i] === food1[j]) {
        result.push(food[i]);
      }
    }
  }

  return result.length ? result : false;
}

console.log(
  compare(
    ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"],
    ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"]
  )
);
