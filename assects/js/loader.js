const words = [
  ".Hello",
  ".Hola",
  ".नमस्ते",
  ".Bonjour",
  ".Ciao",
  ".こんにちは",
  ".مرحبا",
  ".Olá",
  "AtlanzA",
];
const wordElement = document.getElementById("word");
const ballElement = document.getElementById("ball");
let index = 0;

function changeWord() {
  wordElement.textContent = words[index];
  index++;
  if (index === words.length) {
    ballElement.style.transform = "translateX(-50%) translateY(-100%)";
    ballElement.classList.add("ball-jump-animation");
    setTimeout(() => {
      ballElement.classList.add("ball-jump-animation");
      setTimeout(() => {
        ballElement.style.display = "none";
        document.body.classList.add("bg-change-animation");
        loader.style.backgroundColor = "white";
      }, 5000);
    }, 500);
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(changeWord, 400);

const loader = document.querySelector(".loader");
const afterLoad = document.querySelector(".after-load");

window.addEventListener("load", function (e) {
  this.setTimeout(function () {
    loader.style.display = "none";
    afterLoad.classList.remove("after-load");
  }, 6000);
});
