/**/
const itemBox = document.querySelector('.items');
const items = document.querySelectorAll('.item');
let mouseDown = false;
let startX;
let scrollLeft;



itemBox.addEventListener('mousedown', (e) => {
    mouseDown = true;
    itemBox.classList.add('active');
    startX = e.pageX - itemBox.offsetLeft; // conaitre la position initilae du click (- moins la marge de la boite itemBox par raport a la page)
    scrollLeft = itemBox.scrollLeft; // conaitre la position initial en scroll de la boite itemBox lorsqu on click,
});

itemBox.addEventListener('mouseleave', () => {
    mouseDown = false;
    itemBox.classList.remove('active')
});

itemBox.addEventListener('mouseup', () => {
    mouseDown = false;
    itemBox.classList.remove('active');
});

itemBox.addEventListener('mousemove', (e) => {
    if (!mouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemBox.offsetLeft;
    const walk = (x - startX) * 3; // () * 3 pour slider plus ou moin vite
    itemBox.scrollLeft = scrollLeft - walk;

});

