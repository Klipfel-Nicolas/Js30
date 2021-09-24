let pressed = [];
let secretCode = 'nicoss';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        alert('Bravo !')
    }
    console.log(pressed.join(''));
})