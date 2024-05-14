const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#playpausebtn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#playpauseimg");
console.log(playPauseImg);

playPauseBtn.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "files/pausebtn.png";
    myVideo.play();
  } else {
    playPauseImg.src = "files/playbtn.png";
    myVideo.pause();
  }
}

// -------------------------------

const muteUnmutebtn = document.querySelector("#muteunmutebtn");
console.log(muteUnmutebtn);

const muteUnmuteImg = document.querySelector("#muteunmuteimg");
console.log(muteUnmuteImg);

muteUnmutebtn.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteImg.src = "files/unmute.png";
    muteUnmutebtn.style.backgroundColor = "blue";
    myVideo.muted = false;
  } else {
    muteUnmuteImg.src = "files/muted.png";
    muteUnmutebtn.style.backgroundColor = "red";
    myVideo.muted = true;
  }
}

myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function updateProgressBar() {
  const progress = (myVideo.currentTime / myVideo.duration) * 100;
  progressBarFill.style.width = progress + "%";
  console.log(progress);
}
