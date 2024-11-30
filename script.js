
let isPaused = false;

const slider = document.querySelector('.slider-frame');
const images = document.querySelectorAll('.img-container');
const totalImages = images.length;

let currentImage = 0;

const interval = 3000;

function animateSlider() {
    if (!isPaused) {
        const translateX = -currentImage * slider.offsetWidth;
        slider.querySelector('.slide-images').style.transform = `translateX(${translateX}px)`;
        currentImage = (currentImage + 1) % totalImages;
    }
}

setInterval(animateSlider, interval);

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        isPaused = true;
    });

    image.addEventListener('mouseout', () => {
        isPaused = false;
    });
});
