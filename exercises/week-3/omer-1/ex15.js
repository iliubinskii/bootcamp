// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the
// given 'language':
// ● mandarin: 'MOST number of native speakers!'
// ● Spanish: '2nd place in a number of native speakers'
// ● English: '3rd place'
// ● Hindi: 'Number 4'
// ● Arabic: '5th most spoken language'
// ● for all others simply log 'Not in the top 5'

function rankLanguage(language) {
  switch (language.toLowerCase()) {
    case "mandarin":
      console.log("MOST number of native speakers!");
      break;

    case "spanish":
      console.log("2nd place in a number of native speakers");
      break;

    case "english":
      console.log("3rd place");
      break;

    case "hindi":
      console.log("Number 4");
      break;

    case "arabic":
      console.log("5th most spoken language");
      break;

    default:
      console.log("Not in the top 5");
  }
}
