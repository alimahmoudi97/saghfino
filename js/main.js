const navbar = document.querySelector(".nav");
const toggler = document.querySelector(".nav__toggler");

const drawer = document.querySelector(".drawer-nav");
const drawerBtnClose = document.querySelector(".drawer-nav__action");

const body = document.body;

function toggleBtn(e) {
  drawer.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
}

toggler.addEventListener("click", toggleBtn);
drawerBtnClose.addEventListener("click", toggleBtn);
