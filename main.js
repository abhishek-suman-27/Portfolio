
/*---------------Toggle icon Navbar-----------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*---------------Scroll Section active link-----------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*---------------Sticky navbar-----------------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*---------------remove toggle icon and navbar-----------------*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*---------------scroll reveal-----------------*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-contact', {origin: 'right'});

/*---------------typed js-----------------*/

const typed = new Typed('.multi-text', {
    strings: ['Programmer', 'Designer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

