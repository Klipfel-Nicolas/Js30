/*
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

let seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return mins * 60 + secs;
    }).reduce((total, seconds) => total + seconds);


let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); // 3600 = 60minutes * 60 secondes;
secondsLeft = secondsLeft % 3600; // Combien reste de seconde apres la division 3600; (modulo)
const minutes = Math.floor(secondsLeft / 60); // le reste (0,9/60) pour trouver en minute le reste
secondsLeft = secondsLeft % 60;


//Temps total de video
console.log(hours, minutes, secondsLeft);

*/