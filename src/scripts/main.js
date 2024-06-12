
let open = window.document.querySelector('.container__btn--is-hamburger');
let close = window.document.querySelector('.container__btn--is-close');
let menu = window.document.querySelector('.menu__box');

open.addEventListener('click', function menuShow() {
    menu.style.display = 'block';
    open.style.display = 'none';
    close.style.display = 'block';
});

close.addEventListener('click', function menuShow() {
    menu.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
});

