//debouncde sert a reduire le nombre de scroll detecter par le listener (performance)
// Toujours pensser a debounce lorsqu on utilise un Event sur le scroll
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
//
/*
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(slideImage => {

        //Moitier de l'image
        let slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        //bas de l'image
        let imageBottom = slideImage.offsetTop + slideImage.height

        let isHalfShown = slideInAt > slideImage.offsetTop;
        let isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add('active')
        } else {
            if (slideImage.classList.contains('active')) {
                slideImage.classList.remove('active');
            } else {

            }
        }



    })
}

window.addEventListener('scroll', debounce(checkSlide)); //debouncde sert a reduire le nombre de scroll detecter par le listener (performance)



// ------------------------------------------------------ Ma Version --------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------- 

let ratio = 0.3;
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= ratio) {
            entry.target.classList.add('active');
        }
    })
}


let observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.slide-in').forEach(function(r) {
    observer.observe(r);
})
*/