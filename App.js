let score = document.querySelector("#score");
const squares = document.querySelectorAll(".box");
let time = document.querySelector("#time");
let mole = document.querySelector(".mole");
let instruction = document.getElementsByClassName("instruction");
let faded = document.getElementById("faded");
var timetaken = 0;

function easy() {
  scores = 0;
  score.innerHTML = scores;
  times = 60;
  timetaken = 1000;
  time.innerHTML = 60;
  document.getElementById("myDIV").style.display = "none";
  setInterval(randomSelect, timetaken);
  let timerid = setInterval(time_remainder, 1000);
}
function medium() {
  scores = 0;
  score.innerHTML = scores;
  times = 60;
  timetaken = 800;
  time.innerHTML = 60;
  document.getElementById("myDIV").style.display = "none";
  setInterval(randomSelect, timetaken);
  let timerid = setInterval(time_remainder, 1000);
}
function hard() {
  scores = 0;
  score.innerHTML = scores;
  times = 60;
  timetaken = 500;
  time.innerHTML = 60;
  document.getElementById("myDIV").style.display = "none";
  setInterval(randomSelect, timetaken);
  let timerid = setInterval(time_remainder, 1000);
}

let hitPosition;

function randomSelect() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomposition = squares[Math.floor(Math.random() * 9)];
  randomposition.classList.add("mole");

  hitPosition = randomposition.id;
}

var scores = 0;
var times = 0;

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      scores++;
      score.innerHTML = scores;
    }
  });
});

function time_remainder() {
  times--;
  time.innerHTML = times;
  if (times <= 10) {
    faded.setAttribute("class", " fa-solid fa-stopwatch fa-2xl fa-beat-fade ");
  }
  if (times === 0) {
    clearInterval(timerid);
    alert("Your final score is " + scores + " . Want to play again?");
    location.reload();
  }
}

function reload() {
  location.reload();
}
