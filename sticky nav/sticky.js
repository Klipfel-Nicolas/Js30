/**/
const navBar = document.querySelector('#main');
const logo = document.querySelector('li.logo');

let fromTop = navBar.offsetTop;

function fixedNav() {

    if (fromTop <= this.scrollY) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = `${navBar.offsetHeight}px`;
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }

}

window.addEventListener('scroll', fixedNav);
