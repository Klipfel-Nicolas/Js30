/*
const triggers = document.querySelectorAll('a');
let highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);


function highlightLink() {

    let highlightCord = this.getBoundingClientRect();
    let highlightTop = highlightCord.top + window.scrollY;

    highlight.style.transform = `translate(${highlightCord.left}px, ${highlightTop}px)`;
    highlight.style.width = `${highlightCord.width}px`;
    highlight.style.height = `${highlightCord.height}px`;

}




triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));
*/