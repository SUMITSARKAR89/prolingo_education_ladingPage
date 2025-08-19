//1. =======================toggle btn 
const toogleOn = document.querySelector(".toggleOn");
const toogleOff = document.querySelector(".toggleOff");

toogleOff.addEventListener("click", () => {
     document.body.classList.add("darkMood");

});
toogleOn.addEventListener("click", () => {
     document.body.classList.remove("darkMood");

});


//2. ====================navigation 
const responsiveNav = document.querySelector("#responsive-nav");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeBtn");

menu.addEventListener("click", () => {
     responsiveNav.style.right = "20px";
});
closeMenu.addEventListener("click", () => {
     responsiveNav.style.right = "-100%";
});


//3. ===============curriculum faq 
 const curFaq = document.querySelectorAll('.cur-content');
 const Faq = document.querySelectorAll('.faq-content');

curFaq.forEach( accs => {
    accs.addEventListener("click", () => {
        accs.classList.toggle("cf-active");
    })
});
Faq.forEach( faq => {
     faq.addEventListener('click', () => {
          faq.classList.toggle("f-active");
     })
});

//4. -------------curriculum img 
const curTitle = document.querySelectorAll('.title');
const curImg = document.querySelectorAll('.cur-img');

curTitle.forEach( (title, index) => {
     title.addEventListener('click', () => {
          curTitle.forEach (title => {
               title.classList.remove('ci-active')
          });
          title.classList.add ('ci-active');

          curImg.forEach(content => {
               content.classList.remove('ci-active');
          });
          curImg[index].classList.add('ci-active');
     });
});