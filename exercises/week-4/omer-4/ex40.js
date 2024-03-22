// JavaScript – Font size changer
// The following exercise contains the following subjects:
// ● DOM
// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

const plusButton = document.getElementById('plus');

const minusButton = document.getElementById('minus');

const textContainer = document.getElementById('text');

plusButton.addEventListener('click', () => {
  const prevSize = parseInt(textContainer.computedStyleMap().get('font-size').value);

  const nextSize = prevSize + 1;

  textContainer.style.fontSize = `${nextSize}px`;

  minusButton.disabled = nextSize <= 6;
  plusButton.disabled = nextSize >= 100;
});

minusButton.addEventListener('click', () => {
  const prevSize = parseInt(textContainer.computedStyleMap().get('font-size').value);

  const nextSize = prevSize - 1;

  textContainer.style.fontSize = `${nextSize}px`;

  minusButton.disabled = nextSize <= 6;
  plusButton.disabled = nextSize >= 100;
});
