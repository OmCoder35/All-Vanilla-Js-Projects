const imgs = document.querySelector(".images");
const img = document.querySelectorAll(".images img");
let index = 0;
function carousal() {
  index++;

  if (index > img.length - 1) {
    index = 0;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;
}
setInterval(carousal, 2000);
