const myprogressbar = document.querySelector("#myprogress");
const masterPlay = document.querySelector("#masterplay");

const gif = document.querySelector("#gif");
const songItems = Array.from(document.getElementsByClassName("songItem"));
const songName = document.querySelectorAll(".songName");
let audioElement = new Audio("songs/1.mp3");
let songPlay = Array.from(document.getElementsByClassName("songsPlay"));
let masterSongName = document.querySelector(".masterSongName");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let index = 0;
let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", function () {
  console.log("timeupdate");
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  //console.log(progress);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", function () {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});
const makeAllPlays = function () {
  songPlay.forEach((element) => {
    element.classList.add("fa-play-circle");
    element.classList.remove("fa-pause-circle");
  });
};
songPlay.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(e.target);
    index = parseInt(e.target.id);
    console.log(index);
    makeAllPlays();
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioElement.src = `songs/${index + 1}.mp3`;
    gif.style.opacity = 1;
    masterSongName.innerText = songs[index].songName;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });
});

previous.addEventListener("click", function () {
  {
    //console.log("prev");

    index--;
    if (index == -1) index = 8;

    audioElement.src = `songs/${index + 1}.mp3`;
    gif.style.opacity = 1;
    masterSongName.innerText = songs[index].songName;
    audioElement.play();
    makeAllPlays();

    audioElement.currentTime = 0;
    masterSongName.innerText = songs[index].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  }
});
next.addEventListener("click", function () {
  {
    //console.log("next");
    index++;
    if (index > 8) index = 0;
    audioElement.src = `songs/${index + 1}.mp3`;
    gif.style.opacity = 1;
    masterSongName.innerText = songs[index].songName;
    audioElement.play();
    makeAllPlays();
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[index].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  }
});
