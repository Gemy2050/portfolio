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
let projectsImages = [...document.querySelectorAll(".projects .project > img")];

showButton.onclick = function(e) {
  if(this.textContent == "Show More") {
    projectsContainer.style.height = "100%";
    this.textContent = "Show Less";
  } else {
    projectsContainer.style.height = "780px";
    this.textContent = "Show More";
  }
}

// Create Popup
projectsImages.forEach((img) => {
  img.addEventListener("click", (e)=> {
    let overlay = document.createElement("div")
    overlay.className = 'popup-overlay';

    let popup = document.createElement("div");
    popup.className="popup";
    let img = document.createElement("img");
    let closeButton = document.createElement("span");
    img.src = e.target.src;
    closeButton.append(document.createTextNode("X"));
    closeButton.className = 'close-button';
    popup.append(img);
    popup.append(closeButton);
    document.body.append(overlay);
    document.body.append(popup);
    
  })
});

document.addEventListener("click", function(e) {
  if(e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});



// Get Current Year For CopyRight
document.querySelector(".footer .copyright .year").innerHTML = new Date().getFullYear();


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