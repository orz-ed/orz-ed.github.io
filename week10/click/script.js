const catBtn = document.querySelector("#catbtn");
console.log(catBtn);

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

catBtn.addEventListener("click", increaseLikes);

function increaseLikes() {
  likeCount++;
  console.log("I am clicked");
  //   likes.textContent = likeCount;
  likes.innerHTML = `<h3>${likeCount}</h3>`;
}
