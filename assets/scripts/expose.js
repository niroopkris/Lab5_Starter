// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  const horn = document.getElementById("horn-select");
  const volume = document.getElementById("volume");
  const button = document.querySelector("button");
  const audio = document.querySelector("audio");

  const hornImg = document.querySelector("img[src]");
  const volumeImg = document.querySelector("img[alt='Volume level 2']");

  horn.addEventListener("input", (event) => {
    if (horn.value == "air-horn") {
      hornImg.setAttribute("src", "assets/images/air-horn.svg");
      audio.setAttribute("src", "assets/audio/air-horn.mp3");
    }
    else if (horn.value == "car-horn") {
      hornImg.setAttribute("src", "assets/images/car-horn.svg");
      audio.setAttribute("src", "assets/audio/car-horn.mp3");
    }
    else {
      hornImg.setAttribute("src", "assets/images/party-horn.svg");
      audio.setAttribute("src", "assets/audio/party-horn.mp3");
    }
  });

  volume.addEventListener("input", (event) => {
    let type = typeof volume.value;
    if (volume.value == 0) {
      volumeImg.setAttribute("src", "assets/icons/volume-level-0.svg");
    }
    else if (volume.value >= 1 && volume.value < 33) {
      volumeImg.setAttribute("src", "assets/icons/volume-level-1.svg"); 
    }
    else if (volume.value >= 33 && volume.value < 67) {
      volumeImg.setAttribute("src", "assets/icons/volume-level-2.svg");
    }
    else if (volume.value >= 67) {  
      volumeImg.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
    audio.volume = Number(volume.value) / 100.0;
  });

  button.addEventListener("click", (event) => {
    if (horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    audio.play();
  });
}