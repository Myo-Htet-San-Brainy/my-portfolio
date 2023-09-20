// SELECTORS
const noProjectsText = document.querySelector(".no-projects-text");
const projectsContainer = document.querySelector(".projects-center");

// IMPORTS
import fetchData from "./fetchData.js";

//LOGIC
async function fetchDataAndDisplayProjects() {
  const projectsUrl = "http://localhost:5000/api/v1/projects";
  //fetch Data
  const allMyProjects = await fetchData(projectsUrl, projectsContainer);
  // display projects
  if (allMyProjects.length <= 0) {
    noProjectsText.style.display = "block";
  } else {
    //show all data
    let projectElements = [];
    allMyProjects.forEach((project) => {
      const projectElement = `<article class="project">
            <img
              src= ${project.img}
              alt="a project"
              class="project-img img"
            />
            <div class="project-info-container">
              <h5 class="project-name">${project.name}</h5>
              <p class="project-text">
                ${project.text}
              </p>
              <div class="project-info-container-footer">
                <a href=${project.gitHubLink} class="project-github" target="blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href=${project.siteUrl} class="project-live-demo" target="blank"> Live Demo </a>
              </div>
            </div>
          </article>`;
      projectElements.push(projectElement);
    });
    projectsContainer.innerHTML = projectElements.join("");
  }
}

fetchDataAndDisplayProjects();
