import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animation--fade-up").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 90%"
    }
  });
});

gsap.utils.toArray(".animation--fade-in").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    delay: 1,
    duration: .8,
    scrollTrigger: {
      trigger: item,
      start: "top 90%"
    }
  });
});

gsap.to(".header", {
  height: 60,
  background: "linear-gradient(180deg, rgba(15,14,15,1) 10%, rgba(15,14,15,0) 100%)",
  duration: 0.3,
  scrollTrigger: {
    trigger: "body",
    start: "top",
    toggleActions: "play reverse play reverse"
  }
});

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".header__nav a");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  headerNav.classList.toggle("header__nav--open");
  body.classList.toggle("no-scroll");
});

function closeMenu() {
  if (window.innerWidth < 576) {
    headerNav.classList.remove("header__nav--open");
    burger.classList.remove("burger--active");
    body.classList.remove("no-scroll");
  }
}

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});



const swiper = new Swiper(".services__slider", {
  modules: [Navigation, Pagination],
  spaceBetween: 32,
  slidesPerView: 1,
  slidesPerGroup: 1, 
  pagination: {
    enabled: false,
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletElement: "span",
  },
  navigation: {
    nextEl: '.services__nav-btn--next',
    prevEl: '.services__nav-btn--prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      pagination: {
        enabled: true,
      }
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
      pagination: {
        enabled: true,
      }
    }
  }
});

