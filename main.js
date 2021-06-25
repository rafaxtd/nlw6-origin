const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');

for (const element of toggle) {

    element.addEventListener('click', () => nav.classList.toggle('show'));

}

for (const link of links) {
    link.addEventListener('click', () => nav.classList.remove('show'));
}

// Changing header shadow when scrolling

const header = document.querySelector('#header')
const navHeight = header.offsetHeight;

function changeHeaderScrolling () {


    window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll');

}

// Carroussel - Swiper

const swiper = new Swiper('.swiper-container', {

    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrappersSize: true
        }
    }

})


// Scroll Reveal API

const scrollReveal = ScrollReveal({

    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about text, #about .image,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,
    { interval: 100 })

// Back to home button visibility

function backToHome () {

    const backToHome = document.querySelector('.back-to-home');

    window.scrollY >= 560 ? backToHome.classList.add('show') : backToHome.classList.remove('show');

}

const sections = document.querySelectorAll('section[id]')

function currentMenuActive () {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionID = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        checkpointStart && checkpointEnd ? document.querySelector(`nav ul li a[href*='${sectionID}']`).classList.add('active') : document.querySelector(`nav ul li a[href*='${sectionID}']`).classList.remove('active')
    }



}



window.addEventListener('scroll', () => {

    changeHeaderScrolling();
    backToHome();
    currentMenuActive();


})