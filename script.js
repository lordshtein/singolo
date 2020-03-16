/* slider */

let slides = document.querySelectorAll(".slider-item");
let currentSlide = 0;

function counter(n) {
    currentSlide = (n+slides.length) % slides.length;
}

function previous(n) {
    hideSlide("to-right");
    counter(n-1);
    showSlide("from-left");
}

function next(n) {
    hideSlide("to-left");
    counter(n+1);
    showSlide("from-right");
}

function hideSlide(direction) {
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener("animationend", function () {
        this.classList.remove("slider-item__active", direction);
    });
}

function showSlide(direction) {
    slides[currentSlide].classList.add("nextSlide", direction);
    slides[currentSlide].addEventListener("animationend", function () {
        this.classList.remove("nextSlide", direction);
        this.classList.add("slider-item__active");
    });
}



document.querySelector(".slider-arrow.left").addEventListener("click", function() {
    previous(currentSlide)
})


document.querySelector(".slider-arrow.right").addEventListener("click", function() {
    next(currentSlide)
})