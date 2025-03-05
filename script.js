// © 2025. Mitanshu All rights reserved.
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Meri Maa K Barabaar Koi Nhi",
    name: "Meri Maa K Barabaar Koi Nhi By Mitanshu Singh",
    source:
      "meri maa ke barabar.m4a",
  },
  {
    title: "Achutam Keshavam",
    name: "Achutam Keshavam By Mitanshu Singh",
    source:
      "Achutam Keshavam.m4a",
  },
  {
    title: "Mere Ghar Ram Aaye Hai 🚩",
    name: "Mere Ghar Ram Aaye Hai 🚩By Mitanshu Singh",
    source:
      "Mere-Ghar-Ram-Aaye-Hain.m4a",
  },
  {
    title: "Keejo Kesari Ke Laal",
    name: "Keejo Kesari Ke Laal By Mitanshu Singh",
    source:
      "Keejo Kesari Ke Laal.m4a",
  },
  {
    title: "Shiv Tandav Stotram",
    name: "Shiv Tandav Stotram By Mitanshu Singh",
    source:
      "Shiv Tandav Stotram.m4a",
  },

  {
    title: "Ganpati Bappa Morya 🙏🙏❤️❤️❤️❤️",
    name: "Ganpati Bappa Morya 🙏❤️ By Mitanshu Singh",
    source:
      "ganpati bappa morya.m4a",
  },
  {
    title: "Kis Roop M Narayan Mil Jaayega",
    name: "Kis Roop M Narayan Mil Jaayega By Mitanshu Singh",
    source:
      "Kis Roop M Narayan Mil Jaayega.m4a",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
// © 2025. Mitanshu Singh All rights reserved.