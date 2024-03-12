// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

function scoreToGrade(score) {
  if (score >= 0 && score <= 64) {
    return "F";
  }

  if (score >= 65 && score <= 69) {
    return "D";
  }

  if (score >= 70 && score <= 79) {
    return "C";
  }

  if (score >= 80 && score <= 89) {
    return "B";
  }

  if (score >= 90 && score <= 100) {
    return "A";
  }
}
