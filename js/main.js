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

 let scrollToBottom = document.querySelector("#scroll-to-bottom")
 let pageBottom = document.querySelector("#page-bottom")
 let scrollToBottom2 = document.querySelector("#second-to-bottom")
 let pageBottom2 = document.querySelector("#second-page-bottom")
 let scrollToBottom3 = document.querySelector("#third-to-bottom")
 let pageBottom3 = document.querySelector("#third-page-bottom")
 let scrollToBottom4 = document.querySelector("#fourth-to-bottom")
 let pageBottom4 = document.querySelector("#fourth-page-bottom")
 
scrollToBottom.addEventListener("click", function() {
  pageBottom.scrollIntoView()
})
scrollToBottom2.addEventListener("click", function() {
	pageBottom2.scrollIntoView()
  })
  scrollToBottom3.addEventListener("click", function() {
	pageBottom3.scrollIntoView()
  })
  scrollToBottom4.addEventListener("click", function() {
	pageBottom4.scrollIntoView()
  })
  
  



