var typed = new Typed('.typing', {
    strings: ['App Developer', 'Backend Engineer', 'UI/UX Designer'],
    typeSpeed: 100,
    loop: true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}