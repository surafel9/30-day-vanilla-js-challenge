'use strict';

const inputArea = document.querySelector('#input-area');
const wordInNumber = document.querySelector('.words');
const counter_button = document.querySelector('#count-btn');

function countWords() {
  let numWords = 0;

  for (let i = 0; i < inputArea.length; i++) {
    let currentCharacter = inputArea[i];
    if (currentCharacter == ' ') {
      numWords += 1;
    }
  }
  numWords += 1;

  wordInNumber.innerHTML = numWords;
}
