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
