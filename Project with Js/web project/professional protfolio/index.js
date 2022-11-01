const header = document.querySelector(".header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scroll>0);
})
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
window.onscroll=() =>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");}

const sr = ScrollReveal({
    distance: '100px',
    duration: 2500,
    rest: true
})
sr.reveal('.home-text',{delay:190,origin:'bottom'});

sr.reveal('.about, .services, .portfolio, .contact',{delay:200,origin:'bottom'});