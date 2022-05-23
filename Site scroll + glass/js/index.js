function menuToggle() {
  const toggleMenu = document.querySelector(".toggle");
  const section = document.querySelector("section");
  toggleMenu.classList.toggle("active");
  section.classList.toggle("active");
}
let video = document.querySelector("section");
window.addEventListener("scroll", function () {
  let value1 = 1 + window.scrollY / -600;
  video.style.opacity = value1;
});
let snake = document.querySelector(".background");
window.addEventListener("scroll", function () {
  let value2 = -1 + window.scrollY / 700;
  snake.style.opacity = value2;
});
