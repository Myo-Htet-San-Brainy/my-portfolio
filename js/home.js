//SELECTORS
const resume = document.querySelector(".hero-info-resume");

// IMPORTS
import { myResumeLink } from "./data.js";

// LOGIC
function addResumeLink() {
  resume.setAttribute("href", myResumeLink);
}
addResumeLink();
