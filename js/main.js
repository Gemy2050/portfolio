// Handle Header Icon 
let icon = document.querySelector(".header .menu-icon");
let bars = document.querySelectorAll(".header .menu-icon span");
let menu = document.querySelector(".header ul");

icon.onclick = function() {
  menu.classList.toggle('active');
  // bars.classList.toggle('active');
  bars.forEach((el) => {
    el.classList.toggle("active");
  })
}


// Increase Width of Skills
function increaseWidth() {

  let widthSpans = document.querySelectorAll(".our-skills .progress span");
  let skillsSection= document.querySelector(".our-skills");

  if (window.scrollY >= skillsSection.offsetTop) {
    widthSpans.forEach((el) => (el.style.width = el.dataset.width));
  }
}



// Handle Window Scrolling Event
window.onscroll = function() {

  increaseWidth();

}


// Increase Projects
let showButton = document.querySelector(".projects .show-more");
let projectsContainer = document.querySelector(".projects .container");

showButton.onclick = function(e) {
  if(this.textContent == "Show More") {
    projectsContainer.style.height = "100%";
    this.textContent = "Show Less";
  } else {
    projectsContainer.style.height = "780px";
    this.textContent = "Show More";
  }
}




// Typed Library
let word = new Typed(".intro", {
  strings: ["Mohamed Gamal", "Front-End Developer", "20 Years"],
  startDelay: 300,
  typeSpeed: 100,
  backDelay: 2000,
  backSpeed: 100,
  loop: true,
  cursorChar: "|",  // Default
});