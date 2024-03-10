// Task 1

function isEven(number) {
  return number % 2 === 0;
}

// Task 2

function printEven(numbers) {
  for (const number of numbers)
    if (isEven(number))
      console.log(number);
}

// Task 3

function hasNumber(numbers, number) {
  return numbers.some(n => n === number);
}

// Task 4

{
  const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y
  }

  const result1 = calculator.add(20, 1)
  const result2 = calculator.subtract(30, 9)

  console.log(calculator.add(result1, result2));
}

// Task 5

{
  const increaseByNameLength = function(money, name) {
    return money * name.length;
  };

  const makeRegal = function(name) {
    return `His Royal Highness, ${name}`;
  };

  const turnToKing = function(name, money) {
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);

    console.log(name + " has " + money + " gold coins");
  };

  turnToKing("martin luther", 100);
}
