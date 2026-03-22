const images = document.querySelectorAll(".gallery-img");

images.forEach(img => {

img.addEventListener("click", () => {

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

const image = document.createElement("img");
image.src = img.src;

lightbox.appendChild(image);

document.body.appendChild(lightbox);

lightbox.addEventListener("click", () => {
lightbox.remove();
});

});

});