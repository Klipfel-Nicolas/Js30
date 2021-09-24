/*
const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; // 100px la largeur de deplacement de l ombre;

function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //ou en une ligne const {offsetWidth: width, offsetHeight: height} = hero;
    let { offsetX: positionX, offsetY: positionY } = e;

    if (this !== e.target) {
        positionX = positionX + e.target.offsetLeft;
        positionY = positionY + e.target.offsetTop;
    } // Pour ne pas remetre a 0 la position X et Y lorsqu on survol h1 on addition les pixel avec ceux du top et de gauche

    const xWalk = Math.round((positionX / width * walk) - (walk / 2));
    const yWalk = Math.round((positionY / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 5px red,
                             ${xWalk * -1}px ${yWalk}px 5px green,
                             ${yWalk}px ${xWalk * -1}px 5px blue,
                             ${yWalk * -1}px ${yWalk}px 5px yellow
    `;
};

hero.addEventListener('mousemove', shadow);
*/

const hero = document.querySelector('.hero');
const title = document.querySelector('h1');
let walk = 100;


function handleShadow(e) {

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: posX, offsetY: posY } = e;

    if (e.taget != this) {
        posX = posX + e.target.offsetLeft;
        posY = posY + e.target.offsetTop;
    };

    let walkX = Math.round((posX * walk) / width) - (walk / 2);
    let walkY = Math.round((posY * walk) / height) - (walk / 2);

    title.style.textShadow = `${walkX * -1}px ${walkY * -1}px 5px grey`;

    console.log(walkX);
}

hero.addEventListener('mousemove', handleShadow);