let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.cube');
    const totalSlides = slides.length;

    slides.forEach(slide => slide.style.display = 'none');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Показываем текущий слайд
    slides[currentSlide].style.display = 'flex';

    const top = slides[currentSlide].querySelector('.top');
    const bottom = slides[currentSlide].querySelector('.bottom');

    top.style.animation = 'rotateTop 1s forwards';
    bottom.style.animation = 'rotateBottom 1s forwards';
}

window.onload = function() {
    const slides = document.querySelectorAll('.cube');
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'flex' : 'none';
    });
};
