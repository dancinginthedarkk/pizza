document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".header__nav");
    const burger = document.querySelector(".header__burger");

    burger.addEventListener("click", function() {
        nav.classList.toggle("show");
    });
});