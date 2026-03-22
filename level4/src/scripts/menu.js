const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");

toggle.addEventListener("click", ()=>{
links.classList.toggle("active");
});