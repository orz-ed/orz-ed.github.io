const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);
// airportAudio.removeAttribute("controls");

// airportAudio.play();
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio);

function playAirportAudio() {
  airportAudio.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAirportAudio);

function pauseAirportAudio() {
  airportAudio.pause();
}

const popButton = document.querySelector("#pop-button");
console.log(popButton);

const popSound = document.querySelector("#pop-audio");

popButton.addEventListener("click", popIt);

function popIt() {
  popSound.play();
}

const penguinAudio = document.querySelector("#penguin-audio");
console.log(penguinAudio);

const penguinButton = document.querySelector("#penguin-button");
console.log(penguinButton);

penguinButton.addEventListener("click", playPenguinAudio);

function playPenguinAudio() {
  penguinAudio.play();
}

const penguinPause = document.querySelector("#penguin-pause");
console.log(penguinPause);

penguinPause.addEventListener("click", pausePenguinAudio);

function pausePenguinAudio() {
  penguinAudio.pause();
}
