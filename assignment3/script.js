function ChangeCharacter(character)
{
switch(character)
{
    case "yuzu":
        document.getElementById("fullimg").src = "img/yuzu.png";
        document.getElementById("name").innerHTML = "Bryan Fury";
        break;
    case "wolf":
        document.getElementById("fullimg").src = "img/wolf.png";
        document.getElementById("name").innerHTML = "Jin Kazama";
        break;
    case "witch":
        document.getElementById("fullimg").src = "img/witch.png";
        document.getElementById("name").innerHTML = "Paul Pheonix";
        break;
    case "red":
        document.getElementById("fullimg").src = "img/red.png";
        document.getElementById("name").innerHTML = "Hwoarang";
        break;
    case "fox":
        document.getElementById("fullimg").src = "img/fox.png";
        document.getElementById("name").innerHTML = "Hwoarang";
        break;
    case "boy":
        document.getElementById("fullimg").src = "img/boy.png";
        document.getElementById("name").innerHTML = "Hwoarang";
        break;
}