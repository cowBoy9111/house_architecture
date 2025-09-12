const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active')
})

const swiper = new Swiper('.projects__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.projects__arrow-next',
        prevEl: '.projects__arrow-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});