const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");
menuBtn.addEventListener("click", (e) => {
  menuMobile.classList.toggle("menu--open");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    770: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
