const newFunc = () => {
  const div = document.createElement("div");
  div.classList.add("heart");
  document.body.appendChild(div);
  div.innerText = "😁";
  const roll = (div.style.left = Math.random() * 100 + `vw`);
  console.log(roll);
  div.style.fontSize = "2.5rem";
  div.style.animationDuration = Math.random() + 1 + 2 + "s";

  setTimeout(() => {
    div.remove();
  }, 5000);
};
setInterval(newFunc, 500);
