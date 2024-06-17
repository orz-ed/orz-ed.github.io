// Since my main goal for this project is to create a functional character selection screen
// I used Javascript to link the buttons to the full body character that appears on screen by
// following a tutorial: https://www.youtube.com/watch?v=ISeyrczkzGY

// I then added an active class, and linked that up to Javascript so that there's a visual indication
// that a character is currently selected, where the background colour will change and made the
// profile icon stand out.

//These are to satisfy my chosen action: click.

function ChangeCharacter(character) {
  switch (character) {
    case "yuzu":
      document.getElementById("fullimg").src = "img/yuzu.png";
      document.getElementById("info").innerHTML = "Yuzu: difficulty ★★★☆☆";
      break;
    case "wolf":
      document.getElementById("fullimg").src = "img/wolf.png";
      document.getElementById("info").innerHTML = "Lune: difficulty ★★☆☆☆";
      break;
    case "witch":
      document.getElementById("fullimg").src = "img/witch.png";
      document.getElementById("info").innerHTML = "Selena: difficulty ★★★★★";
      break;
    case "red":
      document.getElementById("fullimg").src = "img/red.png";
      document.getElementById("info").innerHTML = "Reed: difficulty ★★★★☆";
      break;
    case "fox":
      document.getElementById("fullimg").src = "img/fox.png";
      document.getElementById("info").innerHTML = "Dorothea: difficulty ★☆☆☆☆";
      break;
    case "boy":
      document.getElementById("fullimg").src = "img/boy.png";
      document.getElementById("info").innerHTML =
        "Eulenspiegel: difficulty ★★★★★";
      break;
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("select");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
