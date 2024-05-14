const myVideo = document.querySelector("#stardust-vid");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseBtn.addEventListener("click", playPauseVid);

function playPauseVid() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    myVideo.pause();
  }
}
