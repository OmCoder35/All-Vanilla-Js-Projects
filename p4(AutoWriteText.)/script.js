// const conatiner = document.querySelector(".contaienr");
// const span = document.querySelector(".myspan");
// const myArray = [
//   "Web Developer",
//   "Content creator",
//   "Freelancer",
//   "CAD designer",
//   "MERN Stack developer",
// ];
// console.log(myArray.slice(0, 2));
// const myfunc = () => {
//   const random = myArray[Math.floor(Math.random() * myArray.length)];
//   console.log(random[i.slice(0,index)]);
//   span.textContent = random;
// };
// myfunc();

const conatiner = document.querySelector(".contaienr");
const span = document.querySelector(".myspan");
const text = "hii There My name is omkar Apandkar and im a web develoer";
let index = 0;
function myFunc() {
  span.textContent = text.slice(0, index);
  index++;
  if (index > text.length - 1) {
    index = 0; //this will update
  }
}
setInterval(myFunc, 200);
