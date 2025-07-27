'use strict';

const sentence = [
  'The quick brown fox jumps over the lazy dog while coding JavaScript at lightning speed',
  'While learning React, the clever coder built a typing speed tester',
  'Fast fingers type clean code while sipping hot coffee at midnight',
  'Every smooth keystroke brings the app closer to deployment',
  'Typing gracefully, she crushed bugs and shipped features with ease',
  'Developers debug best when the keyboard clicks like a rhythm machine',
  'With each line typed, the interface came alive like magic',
  'He wrote JavaScript like poetry, smooth and fast',
  'In the silence of night, her fingers danced across the keys',
  'React components flowed from his fingertips without effort',
  'A focused mind and fast fingers build great applications',
  "Bug-free code feels like music to a programmer's ears",
  'The console blinked as if waiting for the next masterpiece',
  'Code was her canvas, and the keyboard her brush',
  'He typed with speed and clarity, never missing a beat',
  "While others slept, the coder's creativity came to life",
  'Each keystroke brought satisfaction and progress',
  'She crafted clean code as the clock struck midnight',
  'The IDE glowed softly, lighting the path to innovation',
  'Typing tests became his daily warm-up ritual',
];

const randomWord = Math.floor(Math.random() * sentence.length); //ma nigga, here used to get index of the array
// console.log(randomWord, words[randomWord]);

document.querySelector('#text-to-type').textContent = sentence[randomWord];

// about user typing
const userTyping = document.querySelector('#input-area');
const textDisplay = document.querySelector('#text-to-type');
const currentSentence = textDisplay.textContent;

const inputArea = document.querySelector('#input-area');

//get the user typed so far
inputArea.addEventListener('input', function () {
  const typedText = inputArea.value;

  // check if the typed text is exactly the same as the original sentence
  if (typedText.trim() === currentSentence.trim()) {
    console.log('U finished the sentence');

    inputArea.disabled = true;
  }
  // console.log(sentence[randomWord]);
});
