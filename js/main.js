/*----- constants -----*/
const redSound = new Audio('simon_sounds/cnote.wav');
const blueSound = new Audio('simon_sounds/enote.wav');
const yellowSound = new Audio('simon_sounds/gnote.wav');
const greenSound = new Audio('simon_sounds/chighnote.wav');

const COLORS = {
  red: 0,
  blue: 1,
  yellow: 2,
  green: 3
};

/*----- state variables -----*/
let playerChoice;
let computerChoice;
let round;
let roundWinner;
let clickDelayer;
let counterNum;
let pauseNum;

/*----- cached elements  -----*/
const redButton = document.getElementById('redBtn');
const blueButton = document.getElementById('blueBtn');
const yellowButton = document.getElementById('yellowBtn');
const greenButton = document.getElementById('greenBtn');
const startButton = document.getElementById('startBtn');
const playGrid = document.getElementById('playGrid');
const roundNumber = document.getElementById('roundNum');
const againButton = document.getElementById('againBtn');
const wholeBody = document.getElementById('wholeBody');
const reportMessage = document.getElementById('reportMsg');
againButton.style.visibility = 'hidden';

/*----- event listeners -----*/
playGrid.addEventListener('click', handleStartGame);
againButton.addEventListener('click', handleAgain);

/*----- functions -----*/
// Start button event listener
function handleStartGame(evt) {
  let eventTarget = evt.target;
  if (eventTarget.id !== 'startBtn') {
    return;
  } else {
    init();
    startButton.style.visibility = 'hidden';
    reportMessage.style.visibility = 'hidden';
    redButton.addEventListener('click', handleClick);
    blueButton.addEventListener('click', handleClick);
    yellowButton.addEventListener('click', handleClick);
    greenButton.addEventListener('click', handleClick);
  }
}

function init() {
  computerChoice = [];
  playerChoice = [];
  round = 1;
  counterNum = 0;
  pauseNum = 0;
  roundWinner = null;
  render();
}

function handleClick(evt) {
  if (counterNum !== computerChoice.length || counterNum === 0) return;
  if (pauseNum === 0) return;
  reportMessage.style.visibility = 'hidden';
  if (roundWinner === 1) {
    reportMessage.style.visibility = 'visible';
  }
  const findId = evt.target;
  if (findId.id === 'redBtn') {
    if (roundWinner === 1) {
      return;
    }
    redSound.play();
    redSound.currentTime = 0;
    redButton.style.backgroundColor = 'red';
    setTimeout(redDarker, 200);
    playerChoice.push(COLORS.red);
  } else if (findId.id === 'blueBtn') {
    if (roundWinner === 1) {
      return;
    }
    blueSound.play();
    blueSound.currentTime = 0;
    blueButton.style.backgroundColor = 'blue';
    setTimeout(blueDarker, 200);
    playerChoice.push(COLORS.blue);
  } else if (findId.id === 'yellowBtn') {
    if (roundWinner === 1) {
      return;
    }
    yellowSound.play();
    yellowSound.currentTime = 0;
    yellowButton.style.backgroundColor = 'yellow';
    setTimeout(yellowDarker, 200);
    playerChoice.push(COLORS.yellow);
  } else {
    if (roundWinner === 1) {
      return;
    }
    greenSound.play();
    greenSound.currentTime = 0;
    greenButton.style.backgroundColor = 'green';
    setTimeout(greenDarker, 200);
    playerChoice.push(COLORS.green);
  }
  roundWinner = getRoundWinner();
  if (roundWinner === 0) {
    round = round + 1;
    playerChoice = [];
    counterNum = 0;
    pauseNum = 0;
    reportMessage.style.visibility = 'visible';
    reportMessage.style.color = 'rgb(102, 255, 51)';
    reportMessage.innerText = 'CORRECT! Next round!'
    render();
  } else if (roundWinner === 1) {
    roundNumber.innerText = `WRONG! You LOSE!`;
    againButton.style.visibility = 'visible';
    reportMessage.style.visibility = 'visible';
    reportMessage.innerText = `You survived until Round ${round}!`
  }
}

function render() {
  renderRound();
  setTimeout(renderHideReport, 1000);
  setTimeout(renderComputerChoice, 1000);
  setTimeout(renderPauser, computerChoice.length * 300 + 1800);
}

function renderHideReport() {
  reportMessage.style.visibility = 'hidden';
}

function renderRound() {
  roundNumber.innerText = `Round ${round}`;
}

function renderComputerChoice() {
  let compChoiceNum = Math.floor(Math.random() * 4);
  computerChoice.push(compChoiceNum);
  computerChoice.forEach(compNumPrint);
}

// This function is used as a guard to stop the player from clicking on the circles IMMEDIATELY after the computer has finished printing.
function renderPauser() {
  pauseNum = 1;
  reportMessage.style.visibility = 'visible';
  reportMessage.innerText = 'Alright! Your turn!'
  reportMessage.style.color = "aliceblue";
}

// Callback function for each number that computerChoice array prints out
function compNumPrint(num, index) {
  setTimeout(function () {
    counterNum = counterNum + 1;
    pauseNum = 0;
    if (num === COLORS.red) {
      redSound.play();
      redSound.currentTime = 0;
      redButton.style.backgroundColor = 'red';
      setTimeout(redDarker, 200);
    } else if (num === COLORS.blue) {
      blueSound.play();
      blueSound.currentTime = 0;
      blueButton.style.backgroundColor = 'blue';
      setTimeout(blueDarker, 200);
    } else if (num === COLORS.yellow) {
      yellowSound.play();
      yellowSound.currentTime = 0;
      yellowButton.style.backgroundColor = 'yellow';
      setTimeout(yellowDarker, 200);
    } else {
      greenSound.play();
      greenSound.currentTime = 0;
      greenButton.style.backgroundColor = 'green';
      setTimeout(greenDarker, 200);
    }
  }, index * 300);
};

// Callback functions to make the colors darker again
function redDarker() {
  redButton.style.backgroundColor = '#660000';
}
function blueDarker() {
  blueButton.style.backgroundColor = '#000066';
}
function yellowDarker() {
  yellowButton.style.backgroundColor = '#666600';
}
function greenDarker() {
  greenButton.style.backgroundColor = '#003300';
}

// Function inside of event listener to get the winner value
function getRoundWinner() {
  if (playerChoice.length === computerChoice.length) {
    roundWinnerNum = arrayEquals(computerChoice, playerChoice);
    return roundWinnerNum;
  } else if (playerChoice.length !== computerChoice.length) {
    roundWinnerNum = valueEquals(playerChoice, computerChoice);
    return roundWinnerNum;
  }
}

// Function that gives a winner value based on if the arrays are the same
function arrayEquals(a, b) {
  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index])) {
    return 0;
  } else {
    return 1;
  }
}

// Function that gives a winner value based on if the elements in the array are the same
function valueEquals(a, b) {
  if (Array.isArray(a) && Array.isArray(b) && a.every((val, index) => val === b[index])) {
    return 7; // 7 doesn't actually do anything. I just put it here so that it's not 0, at least. Because if we returned 0, then render() would run again, and we don't want that to happen when we're determining if the two VALUES of both arrays match each other.
  } else {
    return 1;
  }
}

// Function that will start the "Play again" button
function handleAgain() {
  againButton.style.visibility = 'hidden';
  reportMessage.style.visibility = 'hidden';
  init();
  redButton.addEventListener('click', handleClick);
  blueButton.addEventListener('click', handleClick);
  yellowButton.addEventListener('click', handleClick);
  greenButton.addEventListener('click', handleClick);
}