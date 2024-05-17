const myAudio = document.querySelector("#myaudio");
console.log(myAudio);

const playPauseBtn = document.querySelector("#playpausebtn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#playpauseimg");
console.log(playPauseImg);

// myAudio.removeAttribute("controls");

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
    loopBtn.style.backgroundColor = "#d5cea3";
  } else {
    loop = true;
    loopBtn.style.backgroundColor = "#7b775e";
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

const muteUnmuteImg = document.querySelector("#muteunmuteimg");
console.log(muteUnmuteImg);

muteUnmutebtn.addEventListener("click", toggleSound);

function toggleSound() {
  if (myAudio.muted) {
    muteUnmuteImg.src = "files/unmute.png";
    myAudio.muted = false;
  } else {
    muteUnmuteImg.src = "files/mute.png";
    myAudio.muted = true;
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
