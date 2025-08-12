'use strict';

let guessedNumber = document.querySelector('#guess-number');
const checkButton = document.querySelector('.btn.check');
const reset = document.querySelector('.btn.again');

// guessedNumber = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

const randomNumber = Math.floor(Math.random() * 20) + 1;
guessedNumber = randomNumber;
// console.log(guessedNumber);
