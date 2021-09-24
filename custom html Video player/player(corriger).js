const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenBtn = player.querySelector('.full_screen');



//TOGGLE PLAY/PAUSE

function togglePlay() {
    /*if (video.paused) {
        video.play();
    } else {
        video.pause();
    }*/

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '▌▌';
    toggle.textContent = icon;
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);


//SKIP <<10s or >>25s

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach(button => button.addEventListener('click', skip));

//RANGE TYPE

function handleRangeUpdate() {
    video[this.name] = this.value; //volume et playbackRate sont aussi des propriété de video ou audio comme currentTime 

}

ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));


// BARRE DE PROGRESSION

//pourcentage de lecture
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};

video.addEventListener('timeupdate', handleProgress);

//avance ou retour avec la barre

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false)
progress.addEventListener('moussemove', () => {
    if (mouseDown) {
        scrub();
    }
});

//FULLSCREEN



fullScreenBtn.addEventListener('click', () => video.requestFullscreen())