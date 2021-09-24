function clock() {
    let degresSecondes = 0;
    let degresMinutes = 0;
    let degresHeures = 0;
    let secondes = document.querySelector('.secondes');
    let minutes = document.querySelector('.minutes');
    let heures = document.querySelector('.hours');



    setInterval(function() {
        degresSecondes += 6;
        secondes.style.transformOrigin = "top left";
        secondes.style.transform = `rotate(${degresSecondes}deg) `;

        if (degresSecondes === 270) {
            degresMinutes += 6;
            minutes.style.transformOrigin = "top left";
            minutes.style.transform = `rotate(${degresMinutes}deg) `;
        } else if (degresSecondes === 360) {
            degresSecondes = 0;
        }

        if (degresMinutes === 270) {
            degresHeures += 30;
            heures.style.transformOrigin = "top left";
            heures.style.transform = `rotate(${degresHeures}deg) `;
        } else if (degresMinutes === 360) {
            degresMinutes = 0;
        }

        if (degresHeures === 270) {
            degresHeures = 0;
        }

    }, 1000);

};

clock();