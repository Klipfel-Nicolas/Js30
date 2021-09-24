/**/
let panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {

    if (e.propertyName.includes('flex')) { //flex a cause du flex grow
        this.classList.toggle('open-active')
    }
    if (!this.classList.contains('open') && this.classList.contains('open-active')) {
        this.classList.remove('open-active');
    };
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));