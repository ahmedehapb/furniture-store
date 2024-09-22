let searchIcon = document.querySelector(".search i")
let searchInput = document.querySelector(".search input")
let menu = document.querySelector(".menu")
let menuitems = document.querySelector("nav ul")

searchIcon.onclick = function(){
    if(searchInput.style.width == "0px"){
        searchInput.style.width = "200px";
    }
    else{
        searchInput.style.width = "0px";
    }
}

menu.onclick = function(){
    menuitems.classList.toggle("open");
    menu.classList.toggle("fa-x");
}


// header
ScrollReveal().reveal('.header-img', {duration:500, delay: 0 ,origin: 'right', distance: '50px'});
ScrollReveal().reveal('.content h1', { duration:500, delay: 500 ,origin: 'top', distance: '50px'});
ScrollReveal().reveal('.content p', { duration:500, delay: 1000 ,origin: 'bottom', distance: '50px'});
// header


// deals
ScrollReveal().reveal('.deals .card', {interval: 500, duration:500, origin: 'bottom', distance: '50px'});
// deals

// deals
ScrollReveal().reveal('.about-desc div', {interval: 500, duration:500 ,origin: 'bottom', distance: '50px'});
// deals


const swiper = new Swiper('.swiper', {
    loop: true,
});


