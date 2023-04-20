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

const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
    project.addEventListener('click', () => {
        const url = project.dataset.url;
        window.open(url, '_blank');
    });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});