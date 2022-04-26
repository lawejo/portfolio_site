"use strict";

/* ---------------Nav / Burgermenu----------------------- */
document.querySelector("nav svg").addEventListener("click", slideOutMenu);
document.querySelector(".burgermenu li").addEventListener("click", closemenu);
const burgermenuClass = document.querySelector(".bgmenuWidth");
const burgermenu = document.querySelector(".burgermenu");

function closemenu() {
  if (!burgermenu.classList.contains(burgermenuClass)) {
    slideOutMenu();
  }
}
function slideOutMenu() {
  document.querySelector(".burgermenu").classList.toggle("bgmenuWidth");
  document.querySelector("nav svg").classList.toggle("nav_svg_fixed");
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
  document.querySelector("main").classList.toggle("remove_display");
}

const mediaSize = window.matchMedia("(max-width: 784px)");
let animationSpan = document.querySelector("#animation_span");
let functionsSpan = document.querySelector("#functions_span");

if (mediaSize.matches) {
  animationSpan.textContent = "underneath here";
  functionsSpan.textContent = "Underneath here";
}
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
toggleDarkMode(useDark.matches);
function toggleDarkMode(state) {
  console.log("hallo");
  console.log(state);
  document.querySelector("#fav_16").href =
    "../assets/favicon_io/darkmode_favicon-16x16.png";
  document.querySelector("#fav_32").href =
    "../assets/favicon_io/darkmode_favicon-32x32.png";
  document.documentElement.classList.toggle("dark-mode", state);
}
