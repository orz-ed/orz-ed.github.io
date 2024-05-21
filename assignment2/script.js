const audioList = [
  {
    name: "Colorful Flowers by Tokyo Music Walker",
    link: "lofi/ColorfulFlowers.mp3",
  },
  {
    name: "Purple Dream by Ghostrifter Official",
    link: "lofi/PurpleDream.mp3",
  },
  {
    name: "Wild Strawberry by Purrple Cat",
    link: "lofi/WildStrawb.mp3",
  },
  {
    name: "Fragile by Keys of Moon",
    link: "lofi/Fragile.mp3",
  },
  {
    name: "Green Tea by Purrple Cat",
    link: "lofi/GreenTea.mp3",
  },
  {
    name: "Torn by Purrple Cat",
    link: "lofi/Torn.mp3",
  },
];

const myAudio = document.querySelector("#myaudio");
console.log(myAudio);
const audioName = document.querySelector("#audio-name");

//"play" and "pause" buttons ---------------------------------------------------------------

const playPauseBtn = document.querySelector("#playpausebtn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#playpauseimg");
console.log(playPauseImg);

myAudio.removeAttribute("controls");

playPauseBtn.addEventListener("click", toggleAudioPlayback);

function toggleAudioPlayback() {
  if (myAudio.paused || myAudio.ended) {
    playPauseImg.src = "files/pause.png";
    myAudio.play();
  } else {
    playPauseImg.src = "files/play.png";
    myAudio.pause();
  }
}

// "previous" and "next" buttons ---------------------------------------------------------------

const prevButton = document.querySelector("#prevbtn");
console.log(prevButton);
prevButton.addEventListener("click", prevTrack);

const nextButton = document.querySelector("#nextbtn");
console.log(nextButton);
nextButton.addEventListener("click", nextTrack);

let currentIndex = 0;

function prevTrack() {
  console.log("previous track loading");
  currentIndex = (currentIndex - 1 + audioList.length) % audioList.length;
  console.log(currentIndex);
  playAudioAtIndex(currentIndex);
}

function nextTrack() {
  console.log("next track loading");
  currentIndex = (currentIndex + 1) % audioList.length;
  console.log(currentIndex);
  playAudioAtIndex(currentIndex);
}

function playAudioAtIndex(index) {
  myAudio.pause();
  console.log(audioList[index].link);
  myAudio.src = audioList[index].link;
  audioName.textContent = audioList[index].name;
  myAudio.load();
  myAudio.play();
}

//to autoplay the next song in the list, sourced from https://www.youtube.com/watch?v=lM0g-oNwI48&ab_channel=WebDevMadeEasy
myAudio.addEventListener("ended", nextTrack);

// loop button ---------------------------------------------------------------

let loop = false;

const loopBtn = document.querySelector("#loopbtn");
loopBtn.addEventListener("click", loopAudio);

const loopImg = document.querySelector("#loopimg");
console.log(loopImg);

myAudio.addEventListener("ended", replay);

function replay() {
  console.log("loop is", loop);
  if (loop) {
    myAudio.currentTime = 0;
    myAudio.play();
  }
}

function loopAudio() {
  if (loop) {
    loop = false;
    loopImg.src = "files/loop.png";
  } else {
    loop = true;
    loopImg.src = "files/loopon.png";
  }
  console.log("loop is", loop);
}

// Progress bar ---------------------------------------------------------------

myAudio.addEventListener("timeupdate", updateProgressBar);

const progressBar = document.querySelector(".progbar");
const progressBarFill = document.querySelector("#progbarfill");
console.log(progressBarFill);

function updateProgressBar() {
  const progress = (myAudio.currentTime / myAudio.duration) * 100;
  progressBarFill.style.width = progress + "%";
  console.log(progress);
}

// allows the progress to be changed upon clicking the progress bar
// The tutorial was found by Wing at https://img.ly/blog/how-to-build-video-player-in-javascript/
//this function defines the progress bar moving when its clicked
function progressClicked(e) {
  const position = (e.offsetX / progressBar.offsetWidth) * myAudio.duration; //defines a 'position' based off of where the mouse lands
  myAudio.currentTime = position; //this syncs the audio with the position
}
//this is making the function happen whenever the progress bar is clicked
progressBar.addEventListener("click", progressClicked);
let mousedown = false;
//these allows the user to slide through the progress bar.
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener(
  "mousemove",
  (e) => mousedown && progressClicked(e)
);
progressBar.addEventListener("mouseup", () => (mousedown = false));

// "mute" and "unmute" buttons ---------------------------------------------------------------

const muteUnmutebtn = document.querySelector("#muteunmutebtn");
console.log(muteUnmutebtn);

const muteUnmuteimg = document.querySelector("#muteunmuteimg");
console.log(muteUnmuteimg);

muteUnmutebtn.addEventListener("click", toggleSound);

function toggleSound() {
  if (myAudio.muted) {
    myAudio.muted = false;
    muteUnmuteimg.src = "files/mute.png";
  } else {
    myAudio.muted = true;
    muteUnmuteimg.src = "files/muteon.png";
  }
}

// "increase volume" and "decrese volume" buttons ---------------------------------------------------------------

const decreaseVolBtn = document.querySelector("#voldownbtn");
decreaseVolBtn.addEventListener("click", decreaseVolume);

const increaseVolBtn = document.querySelector("#volupbtn");
increaseVolBtn.addEventListener("click", increaseVolume);

// Event listener to check current volume
myAudio.addEventListener("volumechange", updateVolume);

function updateVolume() {
  const volume = myAudio.volume;
  console.log("Volume changed:", volume);
}

function increaseVolume() {
  if (myAudio.volume < 1.0) {
    myAudio.volume += 0.1;
  }
}
function decreaseVolume() {
  if (myAudio.volume > 0.1) {
    myAudio.volume -= 0.1;
  }
}

// ---------------------------------------------------------------
// This is to create a stopwatch that users can use to time how long they've been studying for,
// I followed this tutorial: https://www.educative.io/answers/how-to-create-a-stopwatch-in-javascript to
// create this timer

var startTime;
var stopwatchInterval;
var elapsedPausedTime = 0;

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  elapsedPausedTime = new Date().getTime() - startTime;
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedPausedTime = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}

function updateStopwatch() {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - startTime;
  var seconds = Math.floor(elapsedTime / 1000) % 60;
  var minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("stopwatch").innerHTML = displayTime;
}

function pad(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}

// window resize event ---------------------------------------------------------------

window.addEventListener("resize", function () {
  if (window.innerWidth >= "800") {
    window.location.href = "index.html";
  }
});

// ---------------------------------------------------------------

//EVERYTHING DOWN HERE ARE SCRIPTS FROM MANY DIFFERENT TUTORIALS I TRIED BUT DIDN'T END UP WORKING OUT

// ---------------------------------------------------------------

// let trackList = [
//   {
//     name: "Colourful Flowers",
//     path: "./lofi/Purple Dream by Ghostrifter Official.mp3",
//     singer: "Tokyo Music Walker",
//   },
//   {
//     name: "Purple Dream",
//     path: "./lofi/Purple Dream by Ghostrifter Official.mp3",
//     singer: "Ghostrifter Official",
//   },
//   {
//     name: "Wild Strawberry",
//     path: "./lofi/Wild Strawberry by Purrple Cat.mp3",
//     singer: "Purrple Cat",
//   },
// ];

// const playpausebtn = document.querySelector("playpausebtn"),
//   playPauseImg = document.querySelector("#playpauseimg"),
//   previous = document.querySelector("prevbtn"),
//   next = document.querySelector("nextbtn");

// let timer;
// let autoplay = 0;
// let indexTrack = 0;
// let songIsPlaying = false;
// let track = document.createElement("audio");

// playpausebtn.addEventListener("click", justPlay);
// next.addEventListener("click", nextSong);
// previous.addEventListener("click", prevSong);

// // Load Tracks
// function loadTrack(indexTrack) {
//   clearInterval(timer);
//   resetSlider();

//   track.src = trackList[indexTrack].path;
//   title.innerHTML = trackList[indexTrack].name;
//   artist.innerHTML = trackList[indexTrack].singer;
//   track.load();
// }
// loadTrack(indexTrack);

// // Play Song
// function playSong() {
//   track.play();
//   songIsPlaying = true;
//   // play.innerHTML = '<i class="fas fa-pause"></i>';
// }

// // Pause Song
// function pauseSong() {
//   track.pause();
//   songIsPlaying = false;
//   // play.innerHTML = '<i class="fas fa-play"></i>';
// }

// // Next song
// function nextSong() {
//   if (indexTrack < trackList.length - 1) {
//     indexTrack++;
//     loadTrack(indexTrack);
//     playSong();
//   } else {
//     indexTrack = 0;
//     loadTrack(indexTrack);
//     playSong();
//   }
// }

// // prev song
// function prevSong() {
//   if (indexTrack > 0) {
//     indexTrack--;
//     loadTrack(indexTrack);
//     playSong();
//   } else {
//     indexTrack = trackList.length - 1;
//     loadTrack(indexTrack);
//     playSong();
//   }
// }

// ---------------------------------------------------------------

// function updateMetadata() {
//   let track = audioList[index];

//   console.log('Playing ' + track.title + ' track...');
//   navigator.mediaSession.metadata = new MediaMetadata({
//     title: track.title,
//     artist: track.artist,
//     album: track.album,
//     artwork: track.artwork,
//   });

// ---------------------------------------------------------------

// const audioName = document.querySelector("#audioname");

// // We create an object array containing the videos
// const audioList = [
//   {
//     name: "Colourful Flowers",
//     link: "lofi/Colorful Flowers by Tokyo Music Walker.mp3",
//   },
//   { name: "Stardust", link: "stardust.mp4" },
// ];

// //depending on the number, it will fetch the right video and its name from the VideoList array
// function playAudio(no) {
//   myAudio.src = audioList[no].link;
//   audioName.textContent = audioList[no].name;
//   // myVideo.load();
//   // myVideo.play();
// }

// ---------------------------------------------------------------

// let prevbtn = document.querySelector(".prevbtn");
// let nextbtn = document.querySelector(".nextbtn");

// let playlist = [
//   "Colorful Flowers by Tokyo Music Walker.mp3",
//   "Purple Dream by Ghostrifter Official.mp3",
//   "Wild Strawberry by Purrple Cat.mp3",
// ];

// let treck; // Variable with track index

// // Event before page loading
// window.onload = function () {
//   treck = 0; // Assign zero to the variable
// };
// const title = document.getElementById("audio-name");

// const songs = [
//   "Colourful Flowers by Tokyo Music Walker",
//   "Purple Dream by Ghostrifter Official",
//   "Wild Strawberry by Purrple Cat",
// ];

// let songIndex = 2;

// loadSong(songs[songIndex]);

// function loadSong(song) {
//   title.innerText = song;
//   audio.src = "lofi/${song}.mp3";
// }

// ---------------------------------------------------------------

// const prevBtn = document.querySelector("#prevbtn");
// const nextBtn = document.querySelector("#nextbtn");

// prevBtn.addEventListener("click", prevSong);
// nextBtn.addEventListener("click", nextSong);

// function prevSong() {
//   songIndex--;

//   if (songIndex < 0) {
//     songIndex = songs.length - 1;
//   }

//   loadSong(songs[songIndex]);

//   playSong();
// }

// function nextSong() {
//   songIndex++;

//   if (songIndex > songs.length - 1) {
//     songIndex = 0;
//   }

//   loadSong(songs[songIndex]);

//   playSong();
// }

// ---------------------------------------------------------------

// if (screen.width <= 950) {
//   window.location = "https://orz-ed.github.io/assignment2.html";
// }
// if (screen.width <= 950) {
//   window.location.replace("https://orz-ed.github.io/assignment2/index2.html");
// }
