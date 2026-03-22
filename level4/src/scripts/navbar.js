const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");
const navbar = document.querySelector(".nav");

/* mobile menu */

if(toggle){
toggle.addEventListener("click", ()=>{
links.classList.toggle("active");
});
}

/* scroll effect */

window.addEventListener("scroll", () => {

if(window.scrollY > 60){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});