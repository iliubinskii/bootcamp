// Let us self-learn something. You come to your new workplace
// and you are an expert in the technologies your company is
// working with. But all of the sudden your boss says. We want to
// implement a feature with dates. This will happen all the time in
// your career. So let's roll up our sleeves and start googling. How
// to .... “date js”.
// And as always the MDN docs are a great source Find how to
// get the following:
// 1. Name of the current day e.g. Sunday

function getDay(dateStr, locale = 'en-US') {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
}

// 2. Current day of the month e.g. 31

function getDayOfMonth(dateStr, locale = 'en-US') {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { day: "numeric" });
}

// 3. Current month e.g January

function getMonth(dateStr, locale = 'en-US') {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { month: "long" });
}

// 4. Current Year e.g 2021

function getYear(dateStr, locale = 'en-US') {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { year: "numeric" });
}

// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’

function getFormattedDate(dateStr, locale = 'en-US') {
  const date = new Date(dateStr);

  const weekday = date.toLocaleDateString(locale, { weekday: 'long' });

  const day = date.toLocaleDateString(locale, { day: "numeric" });

  const month = date.toLocaleDateString(locale, { month: "long" });

  const year = date.toLocaleDateString(locale, { year: "numeric" });

  return `Today is ${weekday} the ${day} of ${month} ${year}`;
}
