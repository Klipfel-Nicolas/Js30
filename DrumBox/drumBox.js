/*let index = window.addEventListener('keydown', function(e) { //On ecoute la touche que l on press

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // On defini les touche que l on souhaite utiliser
    if (!audio) return; // si la touche presser n est pas souhaiter on return rien
    audio.currentTime = 0; // on met au debut (0s) la piste audio, pour ne pas avoir a attendre la fin de la lecture avant de la relancer
    audio.play(); // Si la touche est souhaiter on joue la piste correspondante

    let key = document.querySelector(`.case[data-key="${e.keyCode}"]`); // meme operation pour l'animation
    key.classList.add('playing'); // On ajoute la class playing pour la transition
});

function removeTransition(e) { //Fonction pour retirer la class playing de l'animation
    this.classList.remove('playing'); // this represente la touche presser dans le Listener qui suit
}


let keys = document.querySelectorAll('.case'); //On selectione toute les touche souhaiter 

keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // Et pour chacune d entre elle on ecoute la fin de la transition pour retirer la class

*/