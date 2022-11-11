const container = document.querySelector(".container");
const button = document.querySelector(".btn");
// console.log(button);
button.addEventListener("click", () => {
  myImportFunction();
});
const myImportFunction = () => {
  const newEle = document.createElement("div");
  newEle.classList.add("toast");
  newEle.innerText = `I love Youtube Its perfect`;
  container.appendChild(newEle);
  setTimeout(() => {
    newEle.remove();
  }, 3000);
};
