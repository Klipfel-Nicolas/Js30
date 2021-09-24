let player = document.querySelector('.player');
let video = document.querySelector('.player__video');
let playBtn = document.querySelector('.player__button');
let isPlaying = false;

let sliders = document.querySelectorAll('.player__slider');
let volumes = sliders[0];

let currentProgress = document.querySelector('.progress__filled');
let playRate = sliders[1];


//BOUTON PLAY/PAUSE

function togglePlay() {
    if (!isPlaying) {
        video.play();
        playBtn.innerHTML = '&#9612&#9612;';
    } else {
        video.pause();
        playBtn.innerHTML = '►';
    }

    isPlaying = !isPlaying;
};

playBtn.addEventListener('click', togglePlay);


//VOLUME

volumes.addEventListener('input', function(e) {
    video.volume = e.target.value;
})

// BARRE DE TEMPS

console.log(video.currentTime);

playRate.addEventListener('input', function(e) {
    let moveMovie = e.target.value;
})