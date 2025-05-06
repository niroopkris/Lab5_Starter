// explore.js
const synth = window.speechSynthesis;
const selectVoice = document.getElementById("voice-select");
const button = document.querySelector("button");
const textInput = document.querySelector("textarea");
const faceImg = document.querySelector("img");
let voices = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
  loadVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  button.addEventListener("click", (event) => {
    const sayThis = new SpeechSynthesisUtterance(textInput.value);
    let chosenVoice = selectVoice.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === chosenVoice) {
        sayThis.voice = voices[i];
      }
    }

    faceImg.setAttribute("src", "assets/images/smiling-open.png");

    synth.speak(sayThis);

    //equivalent to doing sayThis.addEventListener("end", (event) => ...)
    sayThis.onend = () => {
      faceImg.setAttribute("src", "assets/images/smiling.png");
    };
  });
}

function loadVoices() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    selectVoice.appendChild(option);
  }
}