'use strict';

const songs = [
  {
    title: 'Cry',
    artist: 'Cigarettes After Sex',
    src: 'songs/Cigarettes-After-Sex-Cry-Lyrics.m4a',
  },
  {
    title: 'The Night We mate',
    artist: 'Lord Huron',
    src: 'songs/Lord-Huron-The-Night-We-Met-Official-Lyric-Video.m4a',
  },
  {
    title: 'Chezila',
    artist: 'Beanie',
    src: 'songs/Chezile-Beanie-Lyrics.m4a',
  },
  {
    title: 'Beach House',
    artist: 'Space Song',
    src: 'songs/Chezile-Beanie-Lyrics.m4a',
  },
];

let currentSongIndex = 0;
const audio = document.getElementById('my-songs');
const playBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('rewind-btn');
const nextBtn = document.getElementById('forward-btn');

loadSong(songs[currentSongIndex]);
