"use strict";

/* ---------------Nav / Burgermenu----------------------- */
document.querySelector("nav svg").addEventListener("click", slideOutMenu);
function slideOutMenu() {
  document.querySelector(".burgermenu").classList.toggle("bgmenuWidth");
}
const mediaSize = window.matchMedia("(max-width: 556px)");
if (mediaSize.matches) {
  document.querySelector("nav h4").textContent = "LWJ";
}

/* -----------------Modal card----------------------- */
