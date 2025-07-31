'use strict';

const heading = document.querySelector('#heading');
const daysInput = document.querySelector('#days');
const hourInput = document.querySelector('#hours');
const minuteInput = document.querySelector('#minutes');
const secondInput = document.querySelector('#seconds');
const startButton = document.querySelector('#start-btn');
const pauseButton = document.querySelector('#pause-btn');
const resumeButton = document.querySelector('#resume-btn');
const resetButton = document.querySelector('#reset-btn');
const startAgainButton = document.querySelector('#start-again-btn');

let countdown;
let totalSeconds = 0;
let initialTotalSeconds = 0;

function startTimer() {
  const days = parseInt(daysInput.value) || 0;
  const hours = parseInt(hourInput.value) || 0;
  const minutes = parseInt(minuteInput.value) || 0;
  const seconds = parseInt(secondInput.value) || 0;
  totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
  initialTotalSeconds = totalSeconds;

  if (totalSeconds <= 0) return;

  heading.textContent = 'Time Remaining';

  startButton.classList.add('hidden');
  pauseButton.classList.remove('hidden');
  startAgainButton.classList.remove('hidden');

  runInterval();
}

function pauseTimer() {
  clearInterval(countdown);

  pauseButton.classList.add('hidden');
  startAgainButton.classList.add('hidden');
  resumeButton.classList.remove('hidden');
  resetButton.classList.remove('hidden');
}

function resumeTimer() {
  resumeButton.classList.add('hidden');
  resetButton.classList.add('hidden');
  pauseButton.classList.remove('hidden');
  startAgainButton.classList.remove('hidden');
  runInterval();
}

function resetTimer() {
  clearInterval(countdown);
  totalSeconds = initialTotalSeconds;
  updateInputs();

  resumeButton.classList.add('hidden');
  resetButton.classList.add('hidden');
  pauseButton.classList.remove('hidden');
  startAgainButton.classList.remove('hidden');
  runInterval();
}

function startAgain() {
  window.location.reload();
}

function runInterval() {
  countdown = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdown);
      heading.textContent = "Time's Up!";

      pauseButton.classList.add('hidden');
      resumeButton.classList.add('hidden');
      resetButton.classList.add('hidden');
      startAgainButton.classList.add('hidden');
      startButton.classList.remove('hidden');
      return;
    }
    totalSeconds--;
    updateInputs();
  }, 1000);
}

function updateInputs() {
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  daysInput.value = d;
  hourInput.value = h;
  minuteInput.value = m;
  secondInput.value = s;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
resetButton.addEventListener('click', resetTimer);
startAgainButton.addEventListener('click', startAgain);
