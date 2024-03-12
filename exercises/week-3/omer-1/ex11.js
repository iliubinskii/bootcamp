// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.

function average(values) {
  let result = 0;

  for (let i = 0; i < values.length; i++) {
    result += values[i];
  }

  return result / values.length;
}

const johnAverage = average([89, 120, 103]);

const mikeAverage = average([116, 94, 123]);

// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.

function printWinner(johnAverage, mikeAverage) {
  if (johnAverage > mikeAverage) {
    console.log(`John's team wins with the average score of ${johnAverage}`);
  }
  else if (mikeAverage > johnAverage) {
    console.log(`Mike's team wins with the average score of ${mikeAverage}`);
  }
  else {
    console.log("It's a draw");
  }
}

printWinner(johnAverage, mikeAverage);

// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).


const johnAverage2 = average([89, 120, 903]);

const mikeAverage2 = average([116, 94, 123]);

printWinner(johnAverage2, mikeAverage2);
