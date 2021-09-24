const bar = document.querySelector('.speed-bar');
const speed = document.querySelector('.speed');
const video = document.querySelector('video');
let isDawn = false;

/*
function moveBar(e) {
    if (!isDawn) return;
    let speedCoord = speed.getBoundingClientRect();
    let barCoord = bar.getBoundingClientRect();
    let barHeight = Math.round((e.offsetY * 100) / speedCoord.height);

    bar.style.height = `${barHeight}%`;

    

    console.log(barHeight);
    console.log(videoSpeed);

}


bar.addEventListener('mousedown', () => isDawn = true)
speed.addEventListener('mousedown', () => isDawn = true);
speed.addEventListener('mouseup', () => isDawn = false);
speed.addEventListener('mouseleave', () => isDawn = false);
speed.addEventListener('mousemove', moveBar);

*/

speed.addEventListener('mousemove', function(e) {
    const y = e.pageY - this.offsetTop; // trouver le debut top de la barre;
    const percent = y / this.offsetHeight;
    console.log(percent);
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(1) + "x"; // toFixed nombre de chiffre apres la virgule affiche
    video.playbackRate = playbackRate;
});