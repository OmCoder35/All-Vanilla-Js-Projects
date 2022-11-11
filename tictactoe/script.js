const choose = document.querySelector("#choice");
const boxes = document.querySelectorAll("div.box");
const button = document.querySelector(".again-btn");
console.log(choose.selectedIndex);
let turn = "X";

//win img
const winImg = document.querySelector("img.winimg");

// function for change turn
const checkTurn = () => {
  return turn === "X" ? "O" : "X";
};

const whenWin = () => {
  const cross = document.querySelectorAll("span.cross");
  const winLose = document.querySelector(".winlose h1");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((win) => {
    if (
      cross[win[0]].innerText === cross[win[1]].innerText &&
      cross[win[2]].innerText === cross[win[1]].innerText &&
      cross[win[0]].innerText !== ""
    ) {
      winLose.innerHTML = `${cross[win[0]].innerText} IS YOU WON`;

      this.setTimeout(() => {
        winLose.innerHTML = "";
      }, 5000);
    }
  });
};
/*for option */
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.preventDefault();

    if (choose.selectedIndex == 0) {
      //selectIndex is for select tag and their options
      const ele = box.querySelector("span.cross");
      ele.innerText = turn;
      turn = checkTurn();
      console.log(turn);
      whenWin();
    }
  });
});
// reset game
button.addEventListener("click", () => {
  const crosses = document.querySelectorAll(".cross");
  Array.from(crosses).forEach((cross) => {
    cross.innerText = "";
  });
});
