  /*----- constants -----*/
const redSound = new Audio('/simon_sounds/cnote.wav');
const blueSound = new Audio('/simon_sounds/enote.wav');
const yellowSound = new Audio('/simon_sounds/gnote.wav');
const greenSound = new Audio('/simon_sounds/chighnote.wav');

const COLORS = {
  red: 0,
  blue: 1,
  yellow: 2,
  green: 3
}

  /*----- state variables -----*/
let playerChoice;
let computerChoice;
let round;
let roundWinner;
let gameWinner;

  /*----- cached elements  -----*/
const redButton = document.getElementById('redBtn');
const blueButton = document.getElementById('blueBtn');
const yellowButton = document.getElementById('yellowBtn');
const greenButton = document.getElementById('greenBtn');
const startButton = document.getElementById('startBtn');
const playGrid = document.getElementById('playGrid');
const roundNumber = document.getElementById('roundNum');

  /*----- event listeners -----*/
playGrid.addEventListener('click', handleStartGame);



  /*----- functions -----*/
function handleStartGame(evt) {
  let eventTarget = evt.target;
  if (eventTarget.id !== 'startBtn') {
    return;
  } else {
    console.log('Only the button was clicked!')
    init();
    startButton.style.visibility = 'hidden';
  }
}

function init() {
  computerChoice = [];
  playerChoice = [];
  round = 1;
  roundWinner = null;
  gameWinner = null;
  console.log('Init is working!');
  redButton.addEventListener('click', handleClick);
  blueButton.addEventListener('click', handleClick);
  yellowButton.addEventListener('click', handleClick);
  greenButton.addEventListener('click', handleClick);
  setTimeout(render, 1000);
  // render();
}

function handleClick(evt) {
  const findId = evt.target;
  if (findId.id === 'redBtn') {
    redSound.play();
    playerChoice.push(COLORS.red);
  } else if (findId.id === 'blueBtn') {
    blueSound.play();
    playerChoice.push(COLORS.blue);
  } else if (findId.id === 'yellowBtn') {
    yellowSound.play();
    playerChoice.push(COLORS.yellow);
  } else {
    greenSound.play();
    playerChoice.push(COLORS.green);
  }
  console.log(findId);
  console.log(playerChoice);
} 


function render() {
  console.log('Render is working!');
  renderRound();
  renderComputerChoice();
}

function renderRound() {
  roundNumber.innerText = 'Round 1';
}

function renderComputerChoice() {
  let compChoiceNum = Math.floor(Math.random() * 4);
  computerChoice.push(compChoiceNum);
  console.log(computerChoice);
  computerChoice.forEach(compNumPrint);
}

// function compNumPrint(num) {
//   if (num === COLORS.red) {
//     redSound.play();
//     redButton.style.backgroundColor = 'red'
//     setTimeout(redDarker, 300);
//   } else if (num === COLORS.blue) {
//     blueSound.play();
//     blueButton.style.backgroundColor = 'blue';
//     setTimeout(blueDarker, 300);
//   } else if (num === COLORS.yellow) {
//     yellowSound.play();
//     yellowButton.style.backgroundColor = 'yellow';
//     setTimeout(yellowDarker, 300);
//   } else {
//     greenSound.play();
//     greenButton.style.backgroundColor = 'green';
//     setTimeout(greenDarker, 300);
//   }
// }

// function redDarker() {
//   redButton.style.backgroundColor = '#660000';
// }
// function blueDarker() {
//   blueButton.style.backgroundColor = '#000066';
// }
// function yellowDarker() {
//   yellowButton.style.backgroundColor = '#666600';
// }
// function greenDarker() {
//   greenButton.style.backgroundColor = '#003300';
// }


