const sections = document.querySelectorAll(".menu-category");
const navLinks = document.querySelectorAll(".menu-nav a");

function activateMenu() {

  const visibleSections = Array.from(sections).filter(
    section => section.style.display !== "none"
  );

  let current = "";

  visibleSections.forEach(section => {

    const sectionTop = section.offsetTop - 220;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  // ensure last section works
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    if (visibleSections.length > 0) {
      current = visibleSections[visibleSections.length - 1].id;
    }
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