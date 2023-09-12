//SELECTORS

const form = document.querySelector(".search-form");
const formInput = document.querySelector(".search-input");
const projectsContainer = document.querySelector(".projects-center");

//IMPORTS
import { allMyProjects } from "./data.js";
//LOGIC

form.addEventListener("keyup", () => {
  //get input value
  const searchText = formInput.value.toLowerCase();
  //filter projects based on the input value
  const filteredProjects = allMyProjects.filter((project) => {
    project.name = project.name.toLowerCase();
    return project.name.includes(searchText);
  });
  //display
  display(filteredProjects);
});

function display(projects) {
  if (projects.length <= 0) {
    projectsContainer.innerHTML =
      "<h2 class='no-items-search'>No Matching Projects</h2>";
  } else {
    //show all data
    let projectElements = [];
    projects.forEach((project) => {
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
