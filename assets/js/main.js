/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.style.bottom = "0";
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.style.bottom = "-100%";
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.style.bottom = "-100%";
  });
});

// HIDE MENU IF IT'S OPEN AND USER CLICK ON THE BACKGROUND
const dropMenu = () => {
  navMenu.style.bottom = "-100%";
};

if (main) {
  main.addEventListener("click", dropMenu);
}

if (footer) {
  footer.addEventListener("click", dropMenu);
}

/*==================== roles MODAL ====================*/
const roles = document.querySelectorAll(".roles_modal");
const openBtn = document.querySelectorAll(".roles_button");
const closeBtn = document.querySelectorAll(".roles_modal-close");

openBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    roles[index].classList.add("active_modal");
  });
});

closeBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    roles[index].classList.remove("active_modal");
  });
});

roles.forEach((modal) => {
  modal.addEventListener("click", () => {
    modal.classList.remove("active_modal");
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
// Initialize Swiper
let swiper = new Swiper(".swiper-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*======================= FOOTER ===================*/
const currentYear = document.querySelector("#current-year");

const yearText = new Date().getFullYear();

currentYear.textContent = yearText.toString();

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Typewritter effects
let app = document.getElementById("name-me");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

typewriter
  .pauseFor(2500)
  .typeString("I'm Emmanuel Jafaru")
  .pauseFor(300)
  .deleteChars(20)
  .typeString(
    ' I speak fluent <strong style="color: #b915d5";> REACT </strong>      '
  )
  .typeString('and <strong style="color: #b915d5";>React Native</strong>')
  .pauseFor(2000)
  .start();

let skills = document.getElementById("skill");
let skillText = new Typewriter(skills, {
  loop: true,
  delay: 55,
});
skillText
  .pauseFor(2500)
  .typeString("Skills!")
  .pauseFor(300)
  .deleteChars(7)
  .typeString('<strong style="color: #b915d5";>Skills!</strong>      ')
  .pauseFor(1000)
  .start();

let about = document.getElementById("about-title");
let aboutText = new Typewriter(about, {
  loop: true,
  delay: 45,
});
aboutText
  .pauseFor(2500)
  .typeString("About!")
  .pauseFor(300)
  .deleteChars(6)
  .typeString('<strong style="color: #b915d5";>About!</strong>      ')
  .pauseFor(1000)
  .start();
let service = document.getElementById("service");
let serviceText = new Typewriter(service, {
  loop: true,
  delay: 75,
});
serviceText
  .pauseFor(2500)
  .typeString("Service!")
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<strong style="color: #b915d5";>Service!</strong>      ')
  .pauseFor(800)
  .start();
let works = document.getElementById("works");
let workText = new Typewriter(works, {
  loop: true,
  delay: 75,
});
workText
  .pauseFor(2500)
  .typeString("Portfolio!")
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong style="color: #b915d5";>Portfolio!</strong>      ')
  .pauseFor(1000)
  .start();
let contact = document.getElementById("contactMe");
let contactText = new Typewriter(contact, {
  loop: true,
  delay: 75,
});
contactText
  .pauseFor(2500)
  .typeString("Contact!")
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<strong style="color: #b915d5";>Contact!</strong>      ')
  .pauseFor(1000)
  .start();
