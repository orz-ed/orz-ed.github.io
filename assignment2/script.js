const myAudio = document.querySelector("#myaudio");
console.log(myAudio);

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

// ---------------------------------------------------------------

const audioName = document.querySelector("#audioname");

// We create an object array containing the videos
const audioList = [
  {
    name: "Colourful Flowers",
    link: "lofi/Colorful Flowers by Tokyo Music Walker.mp3",
  },
  { name: "Stardust", link: "stardust.mp4" },
];

//depending on the number, it will fetch the right video and its name from the VideoList array
function playAudio(no) {
  myAudio.src = audioList[no].link;
  audioName.textContent = audioList[no].name;
  // myVideo.load();
  // myVideo.play();
}
// ---------------------------------------------------------------

let loop = false;

const loopBtn = document.querySelector("#loopbtn");
loopBtn.addEventListener("click", loopAudio);

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
    loopBtn.style.backgroundColor = "#ffffff";
  } else {
    loop = true;
    loopBtn.style.backgroundColor = "#89898968";
  }
  console.log("loop is", loop);
}

// ---------------------------------------------------------------

myAudio.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progbarfill");
console.log(progressBarFill);

function updateProgressBar() {
  const progress = (myAudio.currentTime / myAudio.duration) * 100;
  progressBarFill.style.width = progress + "%";
  console.log(progress);
}

// ---------------------------------------------------------------

const muteUnmutebtn = document.querySelector("#muteunmutebtn");
console.log(muteUnmutebtn);

muteUnmutebtn.addEventListener("click", toggleSound);

function toggleSound() {
  if (myAudio.muted) {
    myAudio.muted = false;
    muteunmutebtn.style.backgroundColor = "#ffffff";
  } else {
    myAudio.muted = true;
    muteunmutebtn.style.backgroundColor = "#89898968";
  }
}

// ---------------------------------------------------------------

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
const title = document.getElementById("audio-name");

const songs = [
  "Colourful Flowers by Tokyo Music Walker",
  "Purple Dream by Ghostrifter Official",
  "Wild Strawberry by Purrple Cat",
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = "lofi/${song}.mp3";
}

// ---------------------------------------------------------------

const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// ---------------------------------------------------------------
