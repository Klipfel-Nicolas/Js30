/*
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //context du canvas

// On ajuste la taille du canvas a la taille de la fenetre du browers
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//style du canvas
ctx.strokeStyle = '#BADA55'; //couleur de depart lorsqu on dessine
ctx.lineJoin = 'round'; //jointure de traits qui se rencontre arrondi
ctx.lineCap = 'round'; //fin de trait arrondi
ctx.lineWidth = 10;
//regarder google pour globalCompositeOperation


//variables flag
let isDrawing = false; // On se serviras de ca pour arreter de dessiner lors du relachement du clique
let lastX = 0; //position de fin de trait Y (vertical)
let lastY = 0; // position de fin de train X (horizontal)
let hue = 0; //Pour LES couleurs du trait de hsl()
let direction = true; // Serviras pour grossir ou diminuer le trait

function draw(e) {
    if (!isDrawing) return; //stop fonction quand la souris n'est pas enfoncer

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // hsl() different de rba();
    ctx.beginPath();
    //commence a
    ctx.moveTo(lastX, lastY);
    // va a
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]; // pareil que si declarer dans deux variable diff

    hue++ // modifie la couleurs
    if (hue === 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 60 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }


}


canvas.addEventListener('mousedown', (e) => { // lors du click active la variable isDrawing
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //permet de recuperer position souris lors du click pour commencer le dessin
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false); // lors du déclick desactive
canvas.addEventListener('mouseout', () => isDrawing = false); // lorsqu on sort de la zone du canvas desactive

*/