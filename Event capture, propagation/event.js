const divs = document.querySelectorAll('div');

function logText(e) {

    console.log(this.classList.value);
    //e.stopPropagation();
    //console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true // pour remove le eventListener apres la 1ere et unique utilisation
}));