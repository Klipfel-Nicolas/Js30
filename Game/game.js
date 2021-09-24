const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const start = document.querySelector('button');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function randomHole(holes) {

    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) { //Empeche d avoir 2 fois le meme idx on rappelle la fonction pour en avoir un autre
        return randomHole(holes)
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
};

function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    ServiceWorkerRegistration = 0;

    setTimeout(() => timeUp = true, 10000);
    peep();


}

function bonk(e) {
    if (!e.isTrusted) return; //Tricheur (car possible de simuler un click mais alors isTrusted est false);
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));


start.addEventListener('click', startGame);




/*
//MA VERTION SEUL !!!
//HOLES

function toggleMole() {
    let random = Math.round(Math.random() * 5);

    holes[random].classList.add('up');
    setTimeout(() => {
        holes[random].classList.remove('up');
    }, 800);

}


//SCORE

let cpt = 0;
let lastclick;
moles.forEach(mole => mole.addEventListener('click', function(e) {

    if (e.target === lastclick) return;
    cpt++;
    scoreBoard.innerHTML = cpt;
    lastclick = this;
}));

//START

function startGame() {
    cpt = 0;
    scoreBoard.innerHTML = cpt;
    let startInterval = setInterval(toggleMole, 800);
    setTimeout(function() {
        clearInterval(startInterval);
    }, 10000);
};

start.addEventListener('click', startGame);

*/