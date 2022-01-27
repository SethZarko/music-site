// Open Mobile Menu //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// Close Mobile Menu //

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Dynamic Navigation Overlay on Sroll //

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 5)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
       li.classList.remove('active'); 
       if(li.classList.contains(current)) {
        li.classList.add('active')
       }
    })
});

// Add Background to Navigation on Scroll //

window.addEventListener('scroll', function (){
    let header = document.querySelector('header');
    let windowPosition =  window.scrollY > 200;
    header.classList.toggle('scrolling-active', windowPosition);
})

