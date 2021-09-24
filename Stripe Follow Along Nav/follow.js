/**/
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(e) {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if (this.classList.contains('trigger-enter'))
            this.classList.add('trigger-enter-active')
        }, 150);


    const dropdown = this.querySelector('.dropdown')
    let dropCoord = dropdown.getBoundingClientRect();
    let navCoord = nav.getBoundingClientRect();

    let coord = {
        width: dropCoord.width,
        height: dropCoord.height,
        top: dropCoord.top - navCoord.top,
        left: dropCoord.left - navCoord.left
    }

    background.classList.add('open');
    background.style.setProperty('width', `${coord.width}px`);
    background.style.setProperty('height', `${coord.height}px`);
    background.style.setProperty('transform', `translate(${coord.left}px, ${coord.top}px`);
}


function handleLeave(e) {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
