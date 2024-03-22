// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions
// Instructions
// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”.
// Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”

{
 const li = document.querySelector('.start-here');

  li.textContent = 'main title';
}

// 2. Add another subtitle with the text “subtitle 4”

{
  const ul = document.querySelector('body > ul > li:nth-child(3) > ul');

  const subtitle = document.createElement('li');

  subtitle.textContent = 'sub title 4';

  ul.appendChild(subtitle);
}

// 3. Delete the last <li> element from the list.

{
  const li = document.querySelector('body > ul > li:last-child');

  li.remove();
}

// 4. Change the <title> element text to “Master Of The Dom”.

document.title = 'Master Of The Dom';

// 5. Change the text of the <p> element ot something else of
// your
// Note:
// On the next page, you have the HTML code

{
  const p = document.querySelector('p');

  p.textContent = 'something else';
}
