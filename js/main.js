let bars = document.querySelector(".header .menu");
let menu = document.querySelector(".header ul");

bars.onclick = function() {
  menu.classList.toggle('active');
  bars.classList.toggle('active');
}












// Typed Library
let word = new Typed(".intro", {
  strings: ["Mohamed Gamal", "Front-End Dev", "20 Years"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
