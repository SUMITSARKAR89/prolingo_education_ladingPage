// =======================toggle btn 
const toogleOn = document.querySelector(".toggleOn");
const toogleOff = document.querySelector(".toggleOff");

toogleOff.addEventListener("click", () => {
     document.body.classList.add("darkMood");

});
toogleOn.addEventListener("click", () => {
     document.body.classList.remove("darkMood");

});


// ====================navigation 
const responsiveNav = document.querySelector("#responsive-nav");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeBtn");

menu.addEventListener("click", () => {
     responsiveNav.style.right = "20px";
});
closeMenu.addEventListener("click", () => {
     responsiveNav.style.right = "-100%";
});