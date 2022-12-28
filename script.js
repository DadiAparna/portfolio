const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
     console.log("click")


})
