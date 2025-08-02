'use strict';

const songs = [
  {
    title: '♪ Cry',
    artist: 'Cigarettes After Sex',
    src: 'songs/Cigarettes-After-Sex-Cry-Lyrics.m4a',
  },
  {
    title: '♪ The Night We mate',
    artist: 'Lord Huron',
    src: 'songs/Lord-Huron-The-Night-We-Met-Official-Lyric-Video.m4a',
  },
  {
    title: '♪ Chezila',
    artist: 'Beanie',
    src: 'songs/Chezile-Beanie-Lyrics.m4a',
  },
  {
    title: '♪ Space Song',
    artist: 'Beach House',
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

let currentSongIndex = 0;
let isPlaying = false;

function loadsong(song) {
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  audio.src = song.src;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playPauseIcon.classList.replace('fa-play', 'fa-pause');
}
