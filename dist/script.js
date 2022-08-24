window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const navbarShow = document.querySelector("#nav-menu");
const navbarHidden = document.querySelector("#navhidden");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navbarShow.classList.toggle("hidden");
});
