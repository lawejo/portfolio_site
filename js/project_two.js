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
let mobileFirstSpan = document.querySelector("#mobile_first_span");
let dynamicSpan = document.querySelector("#dynamic_span");
let fetchSpan = document.querySelector("#fetch_span");

if (mediaSize.matches) {
  mobileFirstSpan.textContent = "Underneath here";
  dynamicSpan.textContent = "underneath here";
  fetchSpan.textContent = "underneath here";
}
