$(document).ready(function () {
    $('.intro__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
});

$(document).ready(function () {
    $('.hut__slider-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
});

const accordion = document.getElementsByClassName('contentBx');
let i;

for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click',function() {
        this.classList.toggle('active')
    })
}

let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close')

$('.header__btn').on('click', (e) => {
    e.preventDefault();

    $(modal).toggleClass('active');
})

modalClose.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove('active');
})

const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.pageYOffset > header.clientHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};

let headerSubnav = document.querySelector('.header__subnav');
let burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
    headerSubnav.classList.toggle('active');
    burger.classList.toggle('active')
})

let guestsPlus = document.querySelector('.guests__plus');
let guestsMinus = document.querySelector('.guests__minus');
let gusestsValue = document.querySelector('.guest__value');
let count = 1;

guestsPlus.addEventListener('click', () => {
    count++;
    gusestsValue.innerText = count;

    if(count > 0) {
        guestsMinus.removeAttribute('disabled');
    }
});

guestsMinus.addEventListener('click', () => {
    count--;
    gusestsValue.innerText = count;

    if(!count) {
        guestsMinus.setAttribute('disabled', '');
    }
});

let apply = document.querySelector('.apply');
let checked = document.querySelector('.checked');

apply.addEventListener('click', () => {
    checked.value = '';
})