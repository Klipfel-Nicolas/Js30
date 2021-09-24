const timeLeft = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
let btnTime = document.querySelectorAll('button');
let countdown;



function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    //displayEndTime(seconds)

    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    if (remainderSeconds < 10) {
        remainderSeconds = `0${remainderSeconds}`
    };
    let display = `${minutes}:${remainderSeconds}`;
    timeLeft.innerHTML = display;
    document.title = display; //title haut de l onglet 
}

btnTime.forEach(btn => btn.addEventListener('click', (e) => {
    let secondes = e.target.dataset.time;
    timer(secondes);
}))

//MA VERSION
/*
function displayEndTime(secondes) {
    let hours = Math.floor(secondes / 3600);
    let minute = Math.floor((secondes % 3600) / 60);

    let returnHours = new Date().getHours() + hours;
    let returnMinute = new Date().getMinutes() + minute;

    timeEnd.innerHTML = `${returnHours}:${returnMinute}`;

}
*/

function displayEndTime(timeStamps) {
    const end = new Date(timeStamps);
    const hours = end.getHours();
    const minute = end.getMinutes();

    timeEnd.innerHTML = `${hours}:${minute < 10 ? '0': ''}${minute}`;
}

//FORM text

document.customForm.addEventListener('submit', function(e) { //On peut selection un input ou autre grace a son name="customForm"
    e.preventDefault();

    const min = this.minutes.value; // minutes => input name="minutes"
    timer(min * 60);
    this.reset();
})