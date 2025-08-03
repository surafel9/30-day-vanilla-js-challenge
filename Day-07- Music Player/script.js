'use strict';

const songs = [
  {
    title: '♪ Cry',
    artist: '🎙️Cigarettes After Sex',
    src: 'songs/Cigarettes-After-Sex-Cry-Lyrics.m4a',
  },
  {
    title: '♪ The Night We mate',
    artist: '🎙️Lord Huron',
    src: 'songs/Lord-Huron-The-Night-We-Met-Official-Lyric-Video.m4a',
  },
  {
    title: '♪ Chezila',
    artist: '🎙️Beanie',
    src: 'songs/Chezile-Beanie-Lyrics.m4a',
  },
  {
    title: '♪ Space Song',
    artist: '🎙️Beach House',
    src: 'songs/Chezile-Beanie-Lyrics.m4a',
  },
];
const randome = Math.floor(Math.random() * songs.length);
document.querySelector('.artist').textContent = songs[randome].artist;
document.querySelector('.title').textContent = songs[randome].title;

const artistName = document.querySelector('.artist');
const songTitle = document.querySelector('.title');
const audio = document.getElementById('my-songs');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('rewind-btn');
const nextBtn = document.getElementById('forward-btn');
const playPauseIcon = playPauseBtn.querySelector('i');

let currentSongIndex = Math.floor(Math.random() * songs.length);
loadSong(songs[currentSongIndex]);

let isPlaying = false;

function loadSong(song) {
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  audio.src = song.src;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playPauseIcon.classList.replace('fa-play', 'fa-pause');
}
function pauseSong() {
  isPlaying = false;
  audio.pause();
  playPauseIcon.classList.replace('fa-pause', 'fa-play');
}
function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  loadSong(songs[currentSongIndex]);
  playSong();
}
function nextSong() {
  currentSongIndex++;
  if (currentSongIndex > songs.length - 1) {
    currentSongIndex = 0;
  }
  loadSong(songs[currentSongIndex]);
  playSong();
}

playPauseBtn.addEventListener('click', () =>
  isPlaying ? pauseSong() : playSong()
);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('ended', nextSong);

loadSong(songs[currentSongIndex]);
