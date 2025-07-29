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
  'The algorithm ran smoothly, solving problems in seconds',
  'Debugging became a game of finding hidden treasures',
  'Every commit brought the project one step closer to perfection',
  'Keyboard shortcuts were the secret weapons of productivity',
  'The terminal whispered commands like a trusted friend',
  'Variables danced across lines of code, telling a story',
  'Loops repeated endlessly, weaving logic through the program',
  'Functions were the building blocks of elegant solutions',
  'As the cursor blinked, ideas transformed into reality',
  'Syntax errors challenged patience but taught resilience',
  'Documentation was the roadmap guiding every developer’s journey',
  'The stack overflowed with answers and community wisdom',
  'Coding late nights brewed creativity like a strong espresso',
  'Each breakpoint was a pause to reflect and improve',
  'Version control tracked the evolution of brilliance',
  'Interfaces clicked and scrolled in perfect harmony',
  'Code reviews sparked conversations that made software better',
  'Agile sprints moved teams forward like clockwork',
  'Tests caught bugs before they became nightmares',
  'Clean code was the hallmark of a true craftsman',
  'The debugger was a detective hunting down elusive bugs',
  'APIs connected worlds through lines of code',
  'Responsive design made applications feel alive on any device',
  'Deployment day was a celebration of hard work and teamwork',
  'Pull requests opened doors to collaboration and feedback',
  'Code comments told stories behind complex logic',
  'Refactoring was the art of polishing rough gems',
  'The command line was the coder’s playground',
  'Syntax highlighting painted the editor with vibrant clues',
  'Every keystroke was a step closer to digital mastery',
];

const textDisplay = document.querySelector('#text-to-type');
const inputArea = document.querySelector('#input-area');
const timeDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const resetButton = document.querySelector('#reset-btn');

let timerInterval;
let startTime;
let timerStarted = false;
let mistakes = 0;
let charIndex = 0;
let currentSentence = '';

function loadNewSentence() {
  const randomIndex = Math.floor(Math.random() * sentence.length);
  currentSentence = sentence[randomIndex];
  textDisplay.innerHTML = '';
  currentSentence.split('').forEach(char => {
    const charSpan = document.createElement('span');
    charSpan.innerText = char;
    textDisplay.appendChild(charSpan);
  });
  if (textDisplay.children.length > 0) {
    textDisplay.children[0].classList.add('active');
  }
}

function resetTest() {
  clearInterval(timerInterval);
  timerStarted = false;
  mistakes = 0;
  charIndex = 0;
  inputArea.value = '';
  inputArea.disabled = false;
  timeDisplay.textContent = '60s';
  wpmDisplay.textContent = '0';
  accuracyDisplay.textContent = '100%';
  loadNewSentence();
  inputArea.focus();
}

inputArea.addEventListener('input', () => {
  if (!timerStarted) {
    startTime = new Date();
    timerStarted = true;
    timerInterval = setInterval(updateStats, 1000);
  }
  updateTyping();
});

function updateTyping() {
  const typedText = inputArea.value;
  const spans = textDisplay.querySelectorAll('span');

  if (charIndex < typedText.length && charIndex < currentSentence.length) {
    const typedChar = typedText[charIndex];
    if (typedChar === currentSentence[charIndex]) {
      spans[charIndex].classList.add('correct');
      spans[charIndex].classList.remove('incorrect');
    } else {
      spans[charIndex].classList.add('incorrect');
      spans[charIndex].classList.remove('correct');
      mistakes++;
    }
    if (spans[charIndex + 1]) {
      spans[charIndex + 1].classList.add('active');
    }
    spans[charIndex].classList.remove('active');
    charIndex++;
  } else if (charIndex > typedText.length) {
    charIndex--;
    const span = spans[charIndex];
    if (span.classList.contains('incorrect')) {
      mistakes--;
    }
    span.classList.remove('correct', 'incorrect');
    if (spans[charIndex + 1]) {
      spans[charIndex + 1].classList.remove('active');
    }
    span.classList.add('active');
  }

  if (charIndex === currentSentence.length) {
    clearInterval(timerInterval);
    inputArea.disabled = true;
  }
  updateStats();
}

function updateStats() {
  const elapsedTime = timerStarted
    ? Math.floor((new Date() - startTime) / 1000)
    : 0;
  timeDisplay.textContent = elapsedTime + 's';

  const typedCharsCount = charIndex;
  const accuracy =
    typedCharsCount === 0
      ? 100
      : Math.round(((typedCharsCount - mistakes) / typedCharsCount) * 100);
  accuracyDisplay.textContent = accuracy + '%';

  if (elapsedTime > 0) {
    const wpm = Math.round(typedCharsCount / 5 / (elapsedTime / 60));
    wpmDisplay.textContent = wpm;
  }
}

resetButton.addEventListener('click', resetTest);

loadNewSentence();
