//your JS code here. If required.
const audio = document.createElement("audio");
document.body.appendChild(audio);

const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const soundName = btn.textContent.trim(); // applause, boo, gasp...
    audio.pause();
    audio.currentTime = 0;
    audio.src = `sounds/${soundName}.mp3`;
    audio.play();
  });
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});
