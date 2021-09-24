/*
let controls = document.querySelectorAll('input');
const image = document.querySelector('img');
const js = document.querySelector('.hl');

controls.forEach(control => control.addEventListener('input', function(e) {

    let valeur = e.target.value;
    let element = e.srcElement.name;

    if (element == "spacing") {
        image.style.padding = valeur + "px";
    } else if (element == "blur") {
        image.style.filter = "blur(" + valeur + "px)";
    } else if (element == "base") {
        image.style.background = valeur;
        js.style.color = valeur;
    }
}));*/