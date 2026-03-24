const sections = document.querySelectorAll(".menu-category");
const navLinks = document.querySelectorAll(".menu-nav a");

function activateMenu() {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 220;
const sectionHeight = section.offsetHeight;

if (
window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight
) {
current = section.getAttribute("id");
}

});

/* ensure last section works */
if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
current = sections[sections.length - 1].id;
}

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

}

window.addEventListener("scroll", activateMenu);
window.addEventListener("load", activateMenu);