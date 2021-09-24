const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();

    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name}, ${voice.lang}</option>`)
        .join('');

}


function changeVoices() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle(); // lorsqu on change de voix cela coupe le discour et relance avec nouvelle voix
}

function toggle(startOver = true) {
    speechSynthesis.cancel(); //Cancel sinon probleme d'executuion sur chrome
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function handleVoices() {

    msg[this.name] = this.value;
    toggle();

}




speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', changeVoices);
options.forEach(option => option.addEventListener('change', handleVoices));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));