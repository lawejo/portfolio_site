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

/* ----------------------Mediaquery------------------------- */

const mediaSize = window.matchMedia("(max-width: 784px)");
const codePenContainer = document.querySelector("#hacked_hodwarts_codepen");

if (mediaSize.true) {
  console.log(mediaSize);
  codePenContainer.innerHTML = "";
  codePenContainer.innerHTML = `<p>Here you can check out the full JS for the project</p>
  <p class="codepen" data-height="300" data-default-tab="html" data-slug-hash="wvpNxOR" data-preview="true" data-user="axtecho" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/axtecho/pen/wvpNxOR">
  Hacked Hogwarts assignment</a> by axtecho (<a href="https://codepen.io/axtecho">@axtecho</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>   <p> Link to the endresult
    <a href="https://latoso.dk/kea/3semester/project_hacked_hogwarts/" target="_blank">
      <button>https://latoso.dk/kea/3semester/project_hacked_hogwarts/</button></a></p>
      <p>Link to the Github repository<a href="https://github.com/axtecho/11C.04.04_Hacked_Hogwarts_Student_List" target="_blank">
        <button>https://github.com/axtecho/11C.04.04_Hacked_Hogwarts_Student_List</button></a></p>`;
}
