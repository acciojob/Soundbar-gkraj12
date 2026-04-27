//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let currentAudio = null;

document.querySelectorAll(".btn").forEach((button, index) => {
  button.addEventListener("click", function () {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sounds[index]}.mp3`);
    currentAudio.play();
  });
});

document.querySelector(".stop").addEventListener("click", function () {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
