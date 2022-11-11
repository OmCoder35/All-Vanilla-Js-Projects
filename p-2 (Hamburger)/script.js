const Button = document.querySelector(".btn");
const nav = document.querySelector(".navlist");

Button.addEventListener("click", () => {
  console.log();
  nav.classList.toggle("active");
  Button.classList.toggle("active");
});
