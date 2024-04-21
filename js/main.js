//* On Window Scroll
window.onscroll = () => {
  increaseWidth();
  scrollTop();
};

// * Make Typing Effect
let typingElement = document.querySelector(".intro");
let words = ["FrontEnd Developer", "Mohamed Gamal", "21 Years Old"];
let index = 0;
let mainIntervalID;

let typingDuration = 2000;
let typingDelay = 2000;
let removingDuration = 2000;
let removeDelay = 2000;

typingElement.innerText = "";

function startTyping() {
  mainIntervalID = setInterval(addWord, typingDelay);
}
addWord();

function addWord() {
  clearInterval(mainIntervalID);

  index++;
  if (index > words.length - 1) index = 0;

  typingElement.innerText = "";
  let i = 0;
  let word = words[index];

  let intervalID = setInterval(() => {
    typingElement.innerHTML += word[i];
    i++;

    if (i > word.length - 1) {
      clearInterval(intervalID);
      setTimeout(removeWord, removeDelay);
    }
  }, typingDuration / word.length);
}

function removeWord() {
  startTyping();

  let word = words[index];
  let i = word.length;
  let intervalID = setInterval(() => {
    i--;
    typingElement.innerHTML = word.slice(0, i);
    if (i == 0) {
      clearInterval(intervalID);
    }
  }, removingDuration / word.length);
}

//* Increase Width of Skills
function increaseWidth() {
  let widthSpans = document.querySelectorAll(".skills .progress span");
  let skillsSection = document.querySelector(".skills");

  if (window.scrollY >= skillsSection.offsetTop - 100) {
    widthSpans.forEach((el) => (el.style.width = el.dataset.width));
  }
}

//* Scroll To Top Button
function scrollTop() {
  if (window.scrollY >= 3000)
    document.querySelector(".scroll-btn").style.right = "20px";
  else document.querySelector(".scroll-btn").style.right = "-50px";
}

document.querySelector(".scroll-btn").onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

// Handle Contact Form With Email JS
// let from_name = document.querySelector(".contact form .from_name")
// let message = document.querySelector(".contact form .message")
// let email = document.querySelector(".contact form .email")

// function send() {
//   if(from_name.value == '' || message.value == '' || email.value == '') {
//     return false;
//   }
//   emailjs.send("service_gemy","template_7igv6hf",{
//     to_name: "Mohamed",
//     from_name: from_name.value,
//     message: message.value,
//     email_from: email.value,
//     email_to: "gemy46349@gmail.com",
//     }).then((res) => {
//       document.querySelector(".contact .email-popup").style.display="block";
//       document.querySelector(".contact form .reset").click();

//       document.querySelector(".contact .email-popup span").onclick = ()=> {
//         document.querySelector(".contact .email-popup").style.display="none";
//       }
//     } ,(error) => {
//       document.querySelector(".contact .email-popup").innerHTML = "Something Went Wrong"
//       document.querySelector(".contact .email-popup").style.display="block";
//       console.log(error);
//     });
// }

// document.querySelector(".submit").addEventListener("click", send);
document.querySelector(".submit").addEventListener("click", () => {
  // alert("This service is not available now");
});

//* Get Current Year in Footer
document.querySelector(".footer .copyright .year").innerHTML =
  new Date().getFullYear();

//* Get Projects Then Add it To Page

async function addProjects() {
  let projects = document.querySelector(".projects .container .row");
  let res = await fetch("https://gemy2050.github.io/portfolio/projects.json");
  let data = await res.json();

  console.log(data);

  projects.innerHTML = "";

  data.forEach((el) => {
    projects.innerHTML += `
      <div class="col-md-6 col-lg-4">
          <div class="project card" data-aos="flip-left">
            <img loading="lazy" src="${
              el.image
            }" class="card-img-top" alt="image" onclick="openPopup(event)">
            <div class="card-body">
              <h5 class="card-title text-primary">${el.title}</h5>
              <p class="card-text">${el.description}</p>
              <div class="links d-flex justify-content-between align-items-center">
                <a href="${el.code}" target="_blank" title="View Code">
                ${
                  el.code
                    ? '<img loading="lazy" src="imgs/github.png" class="img-fluid" alt="image">'
                    : ""
                }
                </a>
                <a href="${
                  el.demo
                }" target="_blank" title="Live Demo"><img loading="lazy"
                    src="imgs/eye.png" class="img-fluid" alt="image"></a>
              </div>
            </div>
          </div>
        </div>
    `;
  });
}

addProjects();

//* Create Image Popup
function openPopup(e) {
  let overlay = document.createElement("div");
  overlay.className = "popup-overlay";

  let popup = document.createElement("div");
  popup.className = "popup";
  let img = document.createElement("img");
  let closeButton = document.createElement("span");
  img.src = e.target.src;
  closeButton.append(document.createTextNode("X"));
  closeButton.className = "close-button";
  popup.append(img);
  popup.append(closeButton);
  document.body.append(overlay);
  document.body.append(popup);
}

//* Open and Close Setting Box
let icon = document.querySelector(".toggle-setting");
let settingBox = document.querySelector(".setting-box");

icon.onclick = function () {
  this.querySelector("svg").classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
};

document.querySelectorAll("body > div:not(.setting-box)").forEach((el) => {
  el.onclick = function () {
    settingBox.classList.remove("open");
    document
      .querySelector(".toggle-setting .fa-gear")
      .classList.remove("fa-spin");
  };
});

//* Handle Colors option
let colors = document.querySelectorAll(".colors-list li");

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document.querySelector("li.active").classList.remove("active");
    e.target.classList.add("active");
    document.documentElement.style.setProperty(
      "--red-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", e.target.dataset.color);
  });
});

if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--red-color",
    localStorage.getItem("color")
  );
  colors.forEach((color) => {
    color.classList.remove("active");
    if (color.dataset.color == localStorage.getItem("color")) {
      color.classList.add("active");
    }
  });
}

//* Handle ScrollBar
let enableScroll = document.querySelector(".scroll-bar .yes");
let disableScroll = document.querySelector(".scroll-bar .no");

document.querySelectorAll(".scroll-bar span").forEach((el) => {
  el.addEventListener("click", (e) => {
    document
      .querySelector(".scroll-bar .selected")
      .classList.remove("selected");
    e.target.classList.add("selected");
    if (enableScroll.classList.contains("selected")) {
      window.localStorage.setItem("scroll", true);
    } else {
      window.localStorage.setItem("scroll", false);
    }
    scrollBar();
  });
});

function scrollBar() {
  let scroller = document.querySelector(".scroller");

  window.addEventListener("scroll", () => {
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
  });

  if (window.localStorage.getItem("scroll") == "true") {
    scroller.style.visibility = "visible";
    enableScroll.classList.add("selected");
    disableScroll.classList.remove("selected");
  } else {
    scroller.style.visibility = "hidden";
    enableScroll.classList.remove("selected");
    disableScroll.classList.add("selected");
  }
}
scrollBar();

//* Reset Options
document.querySelector(".reset").onclick = () => {
  localStorage.clear();
  location.reload();
};
