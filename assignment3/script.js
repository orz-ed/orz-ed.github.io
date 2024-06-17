// I followed this tutorial: https://www.youtube.com/watch?v=ISeyrczkzGY to learn
// how to connect the buttons to changing the character's full body profile

function ChangeCharacter(character) {
  switch (character) {
    case "yuzu":
      document.getElementById("fullimg").src = "img/yuzu.png";
      document.getElementById("info").innerHTML = "difficulty ★★★☆☆";
      break;
    case "wolf":
      document.getElementById("fullimg").src = "img/wolf.png";
      document.getElementById("info").innerHTML = "difficulty ★★☆☆☆";
      break;
    case "witch":
      document.getElementById("fullimg").src = "img/witch.png";
      document.getElementById("info").innerHTML = "difficulty ★★★★★";
      break;
    case "red":
      document.getElementById("fullimg").src = "img/red.png";
      document.getElementById("info").innerHTML = "difficulty ★★★★☆";
      break;
    case "fox":
      document.getElementById("fullimg").src = "img/fox.png";
      document.getElementById("info").innerHTML = "difficulty ★☆☆☆☆";
      break;
    case "boy":
      document.getElementById("fullimg").src = "img/boy.png";
      document.getElementById("info").innerHTML = "difficulty ★★★★★";
      break;
  }
}
