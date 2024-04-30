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

// modal

const loginClosBtn = document.querySelector(".login__close");
const loginHeaderBtn = document.getElementById("header-btn-login");
const modal = document.querySelector(".modal");

function toggleLoginBtn(e) {
  modal.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
}

loginClosBtn.addEventListener("click", toggleLoginBtn);
loginHeaderBtn.addEventListener("click", toggleLoginBtn);
