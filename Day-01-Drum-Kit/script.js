'use strict';

window.addEventListener('keydown', function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
});
