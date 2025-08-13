'use strict';
const text = document.querySelector('#guess-number');
let guessedNumber = document.querySelector('.number');
const checkButton = document.querySelector('.checkBtn');
const reset = document.querySelector('.againBtn');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');

const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

checkButton.addEventListener('click', function () {
  const value = Number(guess.value);
  console.log(value);

  if (value === randomNumber) {
    guessedNumber.textContent = randomNumber;
    const color = (document.querySelector('body').style.background = '#60b347');
    text.textContent = 'Correct 🎉🎉';
    message.textContent = 'Correct Number 🎉🎉';
  } else if (value !== randomNumber) {
    if (value > randomNumber) {
      message.textContent = '📈  Too high';
    } else message.textContent = '📉 Too low  ';
  }
});

reset.addEventListener('click', function () {
  location.reload();
});
