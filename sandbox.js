// const menu = document.querySelector("#menu-btn");
// const navBars = document.querySelector(".navbar");

// menu.addEventListener("click", (e) => {
//   e.preventDefault();
//   navBars.classList.toggle("active");
// });

// const searchBtn = document.querySelector("#search-btn");
// const form = document.querySelector(".search-form");

// searchBtn.addEventListener("click", () => {
//   form.classList.toggle("active");
// });

const navBar = document.querySelector(".header .navbar");
const searchForm = document.querySelector(".header .search-form");
const loginForm = document.querySelector(".header .login-form");
const contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navBar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navBar.classList.remove("active");
  loginForm.classList.remove("active");
};
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navBar.classList.remove("active");
  searchForm.classList.remove("active");
};
document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};
document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
};

// swiper home slide

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper review slide

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

lightGallery(document.querySelector(".projects .box-container"));
lightGallery(document.querySelector(".logistics .box-container"));
lightGallery(document.querySelector(".farm .box-container"));
