// const myHeading = document.querySelectorAll("p");
// console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "this is a new paragraph";
// myHeading.style.backgroundColor = "pink";

// for (let i = 0; i < 3; i++) {
//   myHeading[i].textContent = "new  " + i;
//   myHeading[i].style.backgroundColor = "pink";
// }

// myHeading.forEach(changeMe);

// function changeMe(item) {
//   //   item.style.backgroundColor = "purple";
//   item.classList.add("purple-box");
// }

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", chooseTopic);
// myButton.addEventListener("click", toggleMe);

function toggleMe() {
  const myImage = document.querySelector("#my-image");
  //   console.log(myImage);
  console.log(myImage.dataset.catname);
  myImage.classList.toggle("round");
  myButton.textContent = myImage.dataset.catname;
}

function toggleColor() {
  const myButton = document.querySelector("#my-button");
  myButton.classList.toggle("pink-box");
  toggleMe();
}

function chooseTopic() {
  const myPara = document.querySelectorAll("p");
  myPara.forEach(displayTopic);
  function displayTopic(item) {
    if (item.dataset.topic === "game") {
      item.classList.toggle("green-box");
    } else if (item.dataset.topic === "sound") {
      item.classList.toggle("yellow-box");
    } else if (item.dataset.topic === "web") {
      item.classList.toggle("red-box");
    }
  }
}

const myTitle = document.querySelector("h1");
myTitle.textContent = "I am a new heading";
let course = "world";
const myImage = document.querySelector("#my-image");
myTitle.innerHTML = `I am a <span class="coral-box">new ${myImage.dataset.catname} </span>`;

myImage.addEventListener("mouseover", makeItRound);
myImage.addEventListener("mouseout", makeItSquare);

function makeItRound() {
  myImage.classList.add("round");
}

function makeItSquare() {
  myImage.classList.remove("round");
}
