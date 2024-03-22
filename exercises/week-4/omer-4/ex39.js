// JavaScript – Multiple inputs copy
// The following exercise contains the following subjects:
// ● events
// Instructions
// Many times an application needs to verify the account by
// sending a verification code by text message.
// Let's create functionality that enables the user to paste the
// verification code to the input fields.
// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once all
// inputs all populated.

const form = document.querySelector('form');

const inputs = document.querySelectorAll('input');

inputs.forEach((input, i) => {
  console.log(input, i);
  input.addEventListener('input', e => {
    console.log(e);
    if (e.target.value.length > 0) {
      if (i === inputs.length - 1) form.submit();
      else inputs[i + 1].focus();
    }
  });
});

// Things to think about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.
// Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.
// Google “clipboardData” to find out how to get the value of
// a paste event.

