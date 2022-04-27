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

const useDark = window.matchMedia("(prefers-color-scheme: dark)");
toggleDarkMode(useDark.matches);
function toggleDarkMode(state) {
  console.log("hallo");
  console.log(state);
  document.querySelector("#fav_16").href =
    "../assets/favicon_io/favicon-16x16.png";
  document.querySelector("#fav_32").href =
    "../assets/favicon_io/favicon-32x32.png";
  document.documentElement.classList.toggle("dark-mode", state);
}
