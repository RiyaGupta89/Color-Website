// Hamburger hamburger

const hamburger = document.querySelector(".toggle-button")
const navbar_items = document.querySelector(".navbar__menu")
    hamburger.addEventListener('click', function() {
        navbar_items.classList.toggle('active');
    })


// Adding that scrolling and dynamically changing navbar item's bottom border which JS which is quite fun and very interesting actually
const highlightMenu = () => {


const homeMenu = document.querySelector("#home-page");
const aboutMenu = document.querySelector("#about-page");
const servicesMenu = document.querySelector("#services-page");
// console.log(homeMenu, aboutMenu, servicesMenu)


scrollPos = window.scrollY;
// console.log(scrollPos);
if(scrollPos < 499 && window.innerWidth > 860) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return
} else if(scrollPos < 900 && window.innerWidth > 860) {
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.add("highlight");
    servicesMenu.classList.remove("highlight");
    return
} else if(scrollPos < 2150 && window.innerWidth > 860) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight")
    return
}
else if(scrollPos > 2151 && Window.innerWidth > 860) {
    servicesMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    homeMenu.classList.remove("highlight");
    return
}

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

