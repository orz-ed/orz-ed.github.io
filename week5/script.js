// console.log("bonjour");
// console.log("sayonara");
// let city = prompt ("what is this city called?")
// console.log("this city is", city)

//this is a comment im sob

// const myName = "not rohit";
// let myDetails = "<h1> my full name is: not rohit khot </h1>";
// //my details.name

// let assignemtn1 = "20";
// let assignemtn2 = "40";
// let assignment3 = "40";

// let total =
//   parseInt(assignemtn1) + parseInt(assignemtn2) + parseInt(assignment3);
// console.log("my total score is", total);

// let Im = "so beyond confused";
// let Please = "send help";

// let GenshinCharas = ["diluc", "kaeya", "chongynu", "xingqiu", "zhongli"];
// let GenshinRecord = [
//   { name: "diluc", id: 1 },
//   { name: "kaeya", id: 2 },
//   { name: "xingqiu", id: 3 },
//   { name: "chongyun", id: 4 },
// ];

let body = document.querySelector("body");
function checkWeather() {
  let temp = document.querySelector("#temperature");
  let temperature = temp.value;

  if (temperature >= 10 && temperature < 20) {
    console.log("it feels cold");
    body.style.backgroundColor = "lightblue";
  } else if (temperature >= 20 && temperature < 30) {
    console.log("it feels warm and sunny");
    body.style.backgroundColor = "orange";
  } else if (temperature >= 30 && temperature < 50) {
    console.log("it is boiling");
    body.style.backgroundColor = "red";
  } else if (temperature < 10) {
    console.log("it is freezing");
    body.style.backgroundColor = "gray";
  } else if (temperature > 50) {
    console.log("how are you alive");
    body.style.backgroundColor = "darkgrey";
  }
}

// let character = prompt("who is your favourite genshin character?");

// if ((character = "diluc")) {
//   console.log("you have good taste");
// } else if ((character = "kaeya")) {
//   console.log("decent taste");
// } else if ((character = "dori")) {
//   console.log("you're wrong");
// }
