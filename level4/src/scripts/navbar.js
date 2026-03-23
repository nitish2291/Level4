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

    const nav = document.querySelector(".nav")
    
    if(window.scrollY > 80){
    
    nav.classList.add("scrolled")
    
    }else{
    
    nav.classList.remove("scrolled")
    
    }
    
    });