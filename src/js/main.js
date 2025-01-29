//box-1
var yellowBlue = document.querySelector(".box.change-color");

function changeColor() {
  yellowBlue.classList.add("is-active-blue");
}
yellowBlue.addEventListener("click", changeColor);

//box-2

var orangeRed = document.querySelector(".box.toggle-color");

function changeColorTwo() {
  orangeRed.classList.toggle("is-active-red");
}
orangeRed.addEventListener("click", changeColorTwo);

//box-3

var pink = document.querySelector(".box.trigger");
var disapear = document.querySelector(".box.target");
function disapearRight() {
  disapear.classList.toggle("is-change-display");
}
pink.addEventListener("click", disapearRight);

//box-5

var clickChangeOther = document.querySelector(".box.trigger-all");

function changeOther() {
  yellowBlue.classList.add("is-active-blue");
  orangeRed.classList.add("is-active-red");
}
clickChangeOther.addEventListener("click", changeOther);

//box-6

// var clickChangeAll = document.querySelector("box.trigger-all-self");

// function changeAll() {
//   yellowBlue.classList.add("is-active-blue");
//   orangeRed.classList.add("is-active-red");
//   clickChangeAll.classList.add("is-active-green");
// }
// clickChangeAll.addEventListener("click", changeAll);

var clickChangeYO = document.querySelector(".box.trigger-all-self");

function changeYO() {
  yellowBlue.classList.add("is-active-blue");
  orangeRed.classList.add("is-active-red");
  clickChangeYO.classList.add("is-active-green");
}

clickChangeYO.addEventListener("click", changeYO);
