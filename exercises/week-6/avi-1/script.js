const input = document.querySelector("input");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const { value } = input;

  if (isValidHexColor(value)) document.body.style.backgroundColor = value;
  else alert("Invalid input");
});

function isValidHexColor(color) {
  const regex = /^#([0-9A-F]{3}){1,2}$/i;
  return regex.test(color);
}
