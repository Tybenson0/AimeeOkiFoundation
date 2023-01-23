const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerContainer = document.querySelector(".hamburger-container");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active")
	navMenu.classList.toggle("active")
	hamburgerContainer.classList.toggle("active")
})


/*swiper*/

var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
  });

var swiper = new Swiper(".mySwiper2", {
	effect: "cards",
	grabCursor: true,
  });
var swiper = new Swiper(".mySwiper3", {
	effect: "cards",
	grabCursor: true,
  });


  
  



