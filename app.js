const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#timeLeft");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;
let hitPossition = null;

function randomSquare(){
  squares.forEach( square => {
    square.classList.remove('mole');
  })
  let molePossition = squares[Math.floor(Math.random() * 25)];
  molePossition.classList.add('mole');

  hitPossition = molePossition.id;
}

squares.forEach( square =>{
  square.addEventListener("click", () => {
    if (square.id === hitPossition){
      result = result + 1;
      score.textContent = result;
    }
  })
})

function moveMole(){
  let timerID = null;
  timerID = setInterval(randomSquare, 750)
}

moveMole();

function count(){
  currentTime-- ;
  timeLeft.textContent = currentTime

  if (currentTime === 0){
    clearInterval(timerID);
    alert("Game Over! your final score is" + result);
  }
}

let timerID = setInterval(count, 1000)