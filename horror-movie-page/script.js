const playBtn = document.querySelector(".play");
const videoContainer = document.querySelector(".video-container");
const closeBtn = document.querySelector(".close");

const container = document.querySelector(".container");
const video = document.querySelector(".video");

playBtn.addEventListener("click", () => {
  videoContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  videoContainer.classList.remove("active");
});

setTimeout(() => {
  video.style.display = "none";
}, 18000);

setTimeout(() => {
  container.classList.add("active");
}, 19000);
