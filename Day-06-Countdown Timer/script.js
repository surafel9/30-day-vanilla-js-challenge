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
  const seconds = parseInt(secondInput.value) || 0;

  let totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    return;
  }
  clearInterval(countdown);

  countdown = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdown);
      heading.textContent = "Time's Up!";
      return;
    }
    totalSeconds--;

    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    daysInput.value = d;
    hourInput.value = h;
    minuteInput.value = m;
    secondInput.value = s;
  }, 1000);
}
startButton.addEventListener('click', startTimer);
