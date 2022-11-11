// const lightButton = document.querySelector(".light");
// const button = document.querySelector(".container button");
// console.log(button);
// const darkButton = document.querySelector(".dark");
// lightButton.addEventListener("click", () => {
//   document.body.style.background = "white";
//   document.body.style.color = "black";
//   button.classList.add("active");
// });
// darkButton.addEventListener("click", () => {
//   document.body.style.background = "black";
//   document.body.style.color = "white";
//   button.classList.add("active");
// });
const changeTheme = document.querySelector("#toggle");

changeTheme.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});
