//SELECTORS
const resume = document.querySelector(".hero-info-resume");
const dadJokeBtn = document.querySelector(".dad-joke-btn");
const dadJoke = document.querySelector(".dad-joke");
const emojisContainer = document.getElementById("sparkleContainer");

// IMPORTS
import { myResumeLink } from "./data.js";
const url = "https://icanhazdadjoke.com/";

// LOGIC
function addResumeLink() {
  resume.setAttribute("href", myResumeLink);
}
addResumeLink();

//dad joke logic
dadJokeBtn.addEventListener("click", () => {
  //animation
  dadJokeBtn.classList.add("squish");
  setTimeout(() => {
    dadJokeBtn.classList.remove("squish");
  }, 300);

  emojisContainer.classList.add("show-emojis");
  setTimeout(() => {
    emojisContainer.classList.remove("show-emojis");
  }, 1000);

  //getting and setting joke
  getDadJoke();
});

async function getDadJoke() {
  try {
    dadJoke.textContent = "loading...";
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!res.ok) {
      throw new Error("Error response from server.");
    }
    const data = await res.json();
    dadJoke.textContent = data.joke;
  } catch (error) {
    dadJoke.textContent = "There was an error. Please try again later.";
  }
}

getDadJoke();
