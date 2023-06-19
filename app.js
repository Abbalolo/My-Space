const menu = document.querySelector(".menu-bar");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const blur = document.querySelector(".blur")


menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
    blur.style.display = "flex"
   
});

close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
    blur.style.display = "none"
});

blur.addEventListener("click", () => {
    nav.classList.remove('open-nav');
    blur.style.display = "none"
})
