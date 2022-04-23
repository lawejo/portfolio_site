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

const href = location.href;
const da = document.querySelector("#da");
const en = document.querySelector("#en");
console.log(href);

en.classList.add("link_off");

if (href === "https://www.latoso.dk/") {
  console.log("en");
}
