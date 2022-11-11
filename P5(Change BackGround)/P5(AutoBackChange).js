// method 1
const updateSpan = document.querySelector(".changeTime");
const updateBtn = document.querySelector(".change-btn");
const body = document.querySelector("body");
const copyButton = document.querySelector(".btn button");
body.style.backgroundColor = "";

updateBtn.addEventListener("click", () => {
  let ranCol1 = Math.floor(Math.random() * 256);
  let ranCol2 = Math.floor(Math.random() * 256);
  let ranCol3 = Math.floor(Math.random() * 256);
  const ranm2 = `hsl(${Math.floor(Math.random() * 360)},100%,50%)`; //----> method 2
  // let rollMe = `rgb(${ranCol1},${ranCol2},${ranCol3})`; //--->method 1 for rgb color
  let rollMe = ranm2; //------> method 2 for hls better color
  updateSpan.textContent = rollMe;
  let roll = (body.style.backgroundColor = rollMe);
  // to copy the text

  navigator.clipboard.writeText(rollMe); //future:this will copy the color but we want it this in seperate clipbord button
});

// method 2

// mouse and keyboard events

// const button = document.querySelector(".change-btn");
// const mainBody = document.querySelector("body");
// //keypress event
// // mainBody.addEventListener("keypress", (e) => {
// //   console.log(e.key);
// // });

// //mouseover and mouseleave event
// button.addEventListener("mouseover", (e) => {
//   console.log("inside button");
// });

// button.addEventListener("mouseleave", (e) => {
//   console.log("outside button");
// });
