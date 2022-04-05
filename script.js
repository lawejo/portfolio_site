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
}
const mediaSize = window.matchMedia("(max-width: 556px)");
if (mediaSize.matches) {
  document.querySelector("nav h4").textContent = "LWJ";
}

/* ---------------UI Cards----------------------- */

function animatePlus() {
  document.querySelector(".svg_project_one").classList.toggle("rotate");
  document.querySelector(".project_one_desc").classList.toggle("display_desc");
}
function animatePlus2() {
  document.querySelector(".svg_project_two").classList.toggle("rotate");
  document.querySelector(".project_two_desc").classList.toggle("display_desc");
}
function animatePlus3() {
  document.querySelector(".svg_project_three").classList.toggle("rotate");
  document
    .querySelector(".project_three_desc")
    .classList.toggle("display_desc");
}

// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.r = random(1, 8);
    this.x = random(0 + this.r, width - this.r);
    this.y = random(0 + this.r, height - this.r);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
    //set color som streng
    if (Math.random() > 0.2) {
      this.color = "rgba(200,169,169,0.6)";
    } else {
      this.color = "rgba(6,34,64,1)";
    }
    //console.log("particle");
  }

  // creation of a particle.
  createParticle() {
    noStroke();
    //fill("rgba(200,169,169,0.5)");
    //fill = color som streng fill(this.color)
    fill(this.color);
    circle(this.x, this.y, this.r);
  }

  // setting the particle in motion.
  moveParticle() {
    if (this.x < 0 + this.r || this.x > width - this.r) this.xSpeed *= -1;
    if (this.y < 0 + this.r || this.y > height - this.r) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke("rgba(255,255,255,0.04)");
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
  const animationContainer = document.querySelector("#contentImg");
  /* console.log(animationContainer.offsetHeight); */
  const canvas = createCanvas(
    animationContainer.offsetWidth,
    animationContainer.offsetHeight
  );
  for (let i = 0; i < width / 5; i++) {
    particles.push(new Particle());
  }
  canvas.parent("contentImg");
}

function draw() {
  background("#0f0f0f");
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
