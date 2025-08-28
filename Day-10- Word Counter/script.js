'use strict';

const inputArea = document.querySelector('#input-area');
const wordInNumber = document.querySelector('.words');
const counter_button = document.querySelector('#count-btn');

function countWords() {
  const text = inputArea.value;

  if (text.trim() === '') {
    wordInNumber.innerHTML = 0;
    return;
  }
  const words = text.trim().split(/\s+/);

  wordInNumber.innerHTML = words.length;
}
