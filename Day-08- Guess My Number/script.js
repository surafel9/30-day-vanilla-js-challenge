'use strict';
const text = document.querySelector('#guess-number');
let guessedNumber = document.querySelector('.number');
const checkButton = document.querySelector('.checkBtn');
const reset = document.querySelector('.againBtn');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');

const randomNumber = Math.floor(Math.random() * 2) + 1;
console.log(randomNumber);

checkButton.addEventListener('click', function () {
  const value = Number(guess.value);
  console.log(value);

  if (value === randomNumber) {
    guessedNumber.textContent = randomNumber;
    const color = (document.querySelector('body').style.background = '#60b347');

    //correct text
    text.textContent = 'Correct🎉🎉';
    console.log('yeah dawg u got it');
  } else console.log('nah');
});
