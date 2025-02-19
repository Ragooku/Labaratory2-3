const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;

    const currentImage = images[imageIndex];
    const top = currentImage.querySelector('.top');
    const bottom = currentImage.querySelector('.bottom');

    // Добавляем анимацию для верхней и нижней частей
    top.style.animation = 'rotateTop 1s forwards';
    bottom.style.animation = 'rotateBottom 1s forwards';
}

controlls.forEach((e) => {
    e.addEventListener('click', (event) => {
        let index;
        if (event.target.classList.contains('prev')) {
            index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
        } else if (event.target.classList.contains('next')) {
            index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
        }
        show(index);
    });
});

show(imageIndex);
