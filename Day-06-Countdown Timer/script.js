'Use strict';

const heading = document.querySelector('#heading');
const daysInput = document.querySelector('#days');
const hourInput = document.querySelector('#hours');
const minuteInput = document.querySelector('#minutes');
const secondInput = document.querySelector('#seconds');
const startButton = document.querySelector('#start-btn');

let countdown;
function startTimer() {
  const days = parseInt(daysInput.value) || 0;
  const hours = parseInt(hourInput.value) || 0;
  const minutes = parseInt(minuteInput.value) || 0;
  const second = parseInt(secondInput.value) || 0;
}
