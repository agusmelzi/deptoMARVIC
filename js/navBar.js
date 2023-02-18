document.querySelector(".menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}