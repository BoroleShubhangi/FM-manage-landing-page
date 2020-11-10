
const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__items');

function showMenu() {
    menu.classList.toggle('show');
    burger.classList.toggle('open');
}

burger.addEventListener('click', () => {
    showMenu();
})

const glideOptions = {
    type: 'carousel',
    autoplay: 5000,
    animationDuration: 1000,
    gap: 30,
    peek: -120,
    perView: 3,
    breakpoints: {
        999: {
            perView: 2,
            gap: 25,
            peek: 25,
        },
    768: {
            perView: 1,
            gap: 25,
            peek: 25,
        },
    },
    classes: {
        activeNav: 'glide__bullet_active',
    },
};

const testimonialsCarousel = new Glide('.glide', glideOptions);
testimonialsCarousel.mount();

const form = document.querySelector('.form');
const email = document.querySelector('.footer__input');

form.addEventListener('submit', e => {
    e.preventDefault();
   const emailValue = email.value;
    if (!isEmail(emailValue)) {
        form.classList.add('error');
        email.placeholder = 'name@gmail.com';
        email.value = '';
        form.classList.add('sucess')
    } else {
        form.classList.remove('error');
        email.placeholder = 'Updates in your inbox…';
    }
})

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
