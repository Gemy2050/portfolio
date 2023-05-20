window.onscroll = ()=> {
  increaseWidth();
  scrollTop();
}


// Typed Library
let word = new Typed(".intro", {
  strings: ["Mohamed Gamal",  "20 Years"],
  startDelay: 300,
  typeSpeed: 100,
  backDelay: 2000,
  backSpeed: 100,
  loop: true,
  cursorChar: "|",  // Default
});


// Increase Width of Skills
function increaseWidth() {

  let widthSpans = document.querySelectorAll(".skills .progress span");
  let skillsSection= document.querySelector(".skills");

  if (window.scrollY >= skillsSection.offsetTop - 100) {
    widthSpans.forEach((el) => (el.style.width = el.dataset.width));
  }
}

// Scroll To Top Button
function scrollTop() {

  if(window.scrollY >= 3000)
    document.querySelector(".scroll-btn").style.right = "20px";
  else 
  document.querySelector(".scroll-btn").style.right = "-50px";

}

document.querySelector(".scroll-btn").onclick = ()=> {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
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



// Handle Contact Form
let from_name = document.querySelector(".contact form .from_name")
let message = document.querySelector(".contact form .message")
let email = document.querySelector(".contact form .email")

function send() {
  if(from_name.value == '' || message.value == '' || email.value == '') {
    return false;
  }
  emailjs.send("service_gemy","template_7igv6hf",{
    to_name: "Mohamed",
    from_name: from_name.value,
    message: message.value,
    email_from: email.value,
    email_to: "gemy46349@gmail.com",
    }).then((res) => {
      document.querySelector(".contact .email-popup").style.display="block";
      document.querySelector(".contact form .reset").click();
      
      document.querySelector(".contact .email-popup span").onclick = ()=> {
        document.querySelector(".contact .email-popup").style.display="none";
      }
    },(error) => {
      console.log(error);
    });
}

document.querySelector(".submit").addEventListener("click", send)


// Get Current Year For CopyRight
document.querySelector(".footer .copyright .year").innerHTML = new Date().getFullYear();
