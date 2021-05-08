const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
// set initial state of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}

navLinks.forEach((link) => link.addEventListener("click", closeOverlay));

function closeOverlay() {
  menuBtn.classList.remove("close");
  menu.classList.remove("show");
  menuNav.classList.remove("show");
  menuBranding.classList.remove("show");
  navItems.forEach((item) => item.classList.remove("show"));

  showMenu = false;
}

// Modal handler
getStatus();
async function getStatus() {
  const options = {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  };
  const response = await fetch("/mail", options);
  const data = await response.json();
  const status = data.status;

  const modal = document.querySelector(".modal");
  modal.style.display = "none";
  if(status == 200) {
    modal.innerHTML = `
      <div id="alert" class="modal-content"><strong>Message sent</strong></div>
      <br><button><a href="/">Back</a></button>
    `;
    modal.style.display = "block";
  } else {
     modal.innerHTML = `
      <div id="alert" class="modal-content"><strong>Message not sent</strong></div>
      <br><button><a href="/contact">Retry</a></button>
    `;
    modal.style.display = "block";
  }
}