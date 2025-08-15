const toogleOn = document.querySelector(".toggleOn");
const toogleOff = document.querySelector(".toggleOff");

toogleOff.addEventListener("click", () => {
     document.body.classList.add("darkMood");

});
toogleOn.addEventListener("click", () => {
     document.body.classList.remove("darkMood");

})