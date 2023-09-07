// SELECTORS
const navbar = document.querySelector("nav");
const openSidebarBtn = document.querySelector(".nav-header-toggle");
const closeSidebarBtn = document.querySelector(".sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");
const date = document.querySelector(".date");
const facebookLinks = document.querySelectorAll(".fa-facebook");
const instagramLinks = document.querySelectorAll(".fa-instagram");
const linkedInLinks = document.querySelectorAll(".fa-linkedin");

//DATA IMPORTS
import { mySocialLinks } from "./data.js";

// LOGIC
// FIXED NAVBAR
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// SIDEBAR
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// DATE
date.textContent = new Date().getFullYear();

// INCLUDE REAL LINKS IN SOCIAL ICONS IN FOOTERS AND SIDEBAR
facebookLinks.forEach((link) => {
  const parentLink = link.parentElement;
  parentLink.setAttribute("href", mySocialLinks.fbLink);
});

instagramLinks.forEach((link) => {
  const parentLink = link.parentElement;
  parentLink.setAttribute("href", mySocialLinks.instaLink);
});

linkedInLinks.forEach((link) => {
  const parentLink = link.parentElement;
  parentLink.setAttribute("href", mySocialLinks.linkedInLink);
});
