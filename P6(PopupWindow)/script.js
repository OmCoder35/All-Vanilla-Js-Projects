const open = document.querySelector(".open");
const close = document.querySelector(".close");
const container = document.querySelector(".container");
open.addEventListener("click", (e) => {
  container.classList.add("active");
});
close.addEventListener("click", (e) => {
  container.classList.remove("active");
});
