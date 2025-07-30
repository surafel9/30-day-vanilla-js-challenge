'Use strict';
const inputText = document.querySelector('#password-input');
const strengthText = document.querySelector('.strength-text');

// console.log(inputText.value);

inputText.addEventListener('input', function (event) {
  const password = event.target.value;
  let strength = {
    level: 'none',
    score: 0,
  };
  if (password.length > 0) {
    let score = 0;
    if (password.length >= 8) score++;
    if ()
  }
});

// strength-text
