const myAudio = document.querySelector("#myaudio");
console.log(myAudio);

const playPauseBtn = document.querySelector("#playpausebtn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#playpauseimg");
console.log(playPauseImg);

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
