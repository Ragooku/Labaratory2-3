const sliderConfig = {
    divisions: 2,
    slides: [
        { topImage: "assets/3.webp", bottomImage: "assets/3.webp" },
        { topImage: "assets/1.jpg", bottomImage: "assets/1.jpg" },
        { topImage: "assets/2.jpg", bottomImage: "assets/2.jpg" },
    ]
};

let currentSlide = 0; ///номер текущего слайда

function initSlider() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = '';

    sliderConfig.slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'cube';
        slideElement.style.display = index === 0 ? 'flex' : 'none';

        // Создаем верхнюю и нижнюю части с разными изображениями
        let topDivisions = '';
        let bottomDivisions = '';

        for (let i = 0; i < sliderConfig.divisions; i++) {
            topDivisions += `
                <div class="division" style="height: ${100/sliderConfig.divisions}%">
                    <img src="${slide.topImage}" alt="Top part ${index = 1}"
                    style="object-fit: cover; object-position: top; height: 100%; width: 100%;"
                     />
                </div>
                <div class="division1" style="height: ${100/sliderConfig.divisions}%; overflow-x: hidden; position: relative;">
                    <img src="${slide.topImage}" alt="Top part ${index = 2}" 
                         style="width: 100%; height: auto; position: absolute; top: 0;" />
                </div>`;
            bottomDivisions += `
    <div class="division" style="height: ${100/sliderConfig.divisions}%">
        <img src="${slide.bottomImage}" alt="Bottom part ${index + 1}"
            style="object-fit: cover; 
                   ${sliderConfig.divisions === 1 ? '' : `object-position: center ${100 - (61/sliderConfig.divisions)}%;`}
                   height: 100%; 
                   width: 100%;" 
        />
    </div>
    <div class="division1" style="height: ${100/sliderConfig.divisions}%">
        <img src="${slide.bottomImage}" alt="Bottom part ${index + 2}"
            style="object-fit: cover; 
                   ${sliderConfig.divisions === 1 ? '' : `object-position: bottom ${100 - (61/sliderConfig.divisions)}%;`}
                   height: 100%; 
                   width: 100%;" 
        />
    </div>
`;
        }

        slideElement.innerHTML = `
            <div class="top">${topDivisions}</div>
            <div class="bottom">${bottomDivisions}</div>
        `;

        slidesContainer.appendChild(slideElement);
    });
}

function animateElements(topElement, bottomElement) {
    const topDivisions = topElement.querySelectorAll('.division');
    const topDivisions1 = topElement.querySelectorAll('.division1');
    const bottomDivisions = bottomElement.querySelectorAll('.division');
    const bottomDivisions1 = bottomElement.querySelectorAll('.division1');;


    // Анимация для division (выезд сверху)
    topDivisions.forEach((division, index) => {
        division.animate(
            [
                { transform: 'translateY(-50%)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ],
            {
                duration: 1000,
                easing: 'ease-out',
                fill: 'forwards',
                delay: index * 10000
            }
        );
    });

    // Анимация для division1 (выезд справа + показ только нижней половины)
    topDivisions1.forEach((division, index) => {
        const img = division.querySelector('img');
        img.animate(
            [
                { transform: 'translateX(100%) translateY(-50%)', opacity: 0 },
                { transform: 'translateX(0) translateY(-50%)', opacity: 1 }
            ],
            {
                duration: 1000,
                easing: 'ease-out',
                fill: 'forwards',
                delay: index * 100 + 200
            }
        );
    });

    bottomDivisions.forEach((division, index) => {
        division.animate(
            [
                { transform: 'translateY(100%)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ],
            {
                duration: 1000,
                easing: 'ease-out',
                fill: 'forwards',
                delay: index * 100
            }
        );
    });

    bottomDivisions1.forEach((division, index) => {
        division.animate(
            [
                { transform: 'translateX(100%)', opacity: 0 },
                { transform: 'translateX(0)', opacity: 1 }
            ],
            {
                duration: 1000,
                easing: 'ease-out',
                fill: 'forwards',
                delay: index * 100 + 200
            }
        );
    });
}

// просто код переключения
function changeSlide(direction) {
    const slides = document.querySelectorAll('.cube');
    const totalSlides = slides.length;

    slides.forEach(slide => slide.style.display = 'none');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'flex';

    const top = slides[currentSlide].querySelector('.top');
    const bottom = slides[currentSlide].querySelector('.bottom');
    animateElements(top, bottom);
}

function initializeAndShowFirstSlide() {
    initSlider();
    const firstSlide = document.querySelector('.cube');
    if (firstSlide) {
        const top = firstSlide.querySelector('.top');
        const bottom = firstSlide.querySelector('.bottom');
        animateElements(top, bottom);
    }
}

window.addEventListener('DOMContentLoaded', initializeAndShowFirstSlide);
window.addEventListener('load', initializeAndShowFirstSlide);