//SELECTORS
const noWorksText = document.querySelector(".no-works-text");
const worksContainer = document.querySelector(".projects-center");
const modal = document.querySelector(".modal-overlay");
const clientName = document.querySelector(".client-name");
const clientReview = document.querySelector(".client-review");
const closeModalBtn = document.querySelector(".modal-close-btn");
const metricElements = [...document.querySelectorAll(".metric-number")];

//IMPORTS
import { works, metrics } from "./data.js";

//LOGIC
// display works and make 'client info' btns work
if (works.length <= 0) {
  noWorksText.style.display = "block";
} else {
  //show all data
  let workElements = [];
  works.forEach((work) => {
    const workElement = `<article class="project">
          <img
            src="${work.img}"
            alt="a project"
            class="project-img img"
          />
          <div class="project-info-container">
            <h5 class="project-name">${work.name}</h5>
            <p class="project-text">
              ${work.text}
            </p>
            <div class="project-info-container-footer">
              <button class="client-info" type="button" data-id='${work.id}'>client info</button>
              <a href="${work.siteUrl}" class="project-live-demo" target="blank"> Live Demo </a>
            </div>
          </div>
        </article>`;
    workElements.push(workElement);
  });
  worksContainer.innerHTML = workElements.join("");
  //make buttons work
  const workBtns = document.querySelectorAll(".client-info");
  workBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      displayModal(e.target.dataset.id);
    });
  });
}

// Close Modal Btn Logic
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

function displayModal(id) {
  //fetch data
  const { client } = fetchClientData(id);
  //fill in template
  clientName.innerHTML = `<span>Client:</span> ${client.name}`;
  clientReview.innerHTML = `<span>Review:</span> ${client.review}`;
  //turn on template
  modal.style.display = "grid";
}

function fetchClientData(id) {
  const clickedWork = works.filter((work) => {
    if (work.id == id) {
      return work;
    }
  });
  return clickedWork[0];
}

//display metrics logic
function displayMetrics(element) {
  const value = metrics[element.dataset.metrictype];
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increase = setInterval(() => {
    if (initialValue > value) {
      element.textContent = `${value}+`;
      clearInterval(increase);
      return;
    }
    element.textContent = `${initialValue}+`;
    initialValue += increment;
  }, 1);
}

metricElements.forEach((element) => displayMetrics(element));
