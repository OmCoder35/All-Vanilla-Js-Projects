const myPara = document.querySelector(".mypara");
const text = [
  "Hii Youtube How are you You guys are amezing Lets do it",
  "Good Night",
];

for (let i = 0; i < text.length; i++) {
  const text1 = text[i];
  let index = 0;
  function myfunc() {
    myPara.textContent = text[i].slice(0, index);
    index++;
    if (index > text[i].length - 1) {
      index = 0;
    }
  }
  setInterval(myfunc, 100);
  break;
}
