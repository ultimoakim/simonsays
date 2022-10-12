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
};

  /*----- state variables -----*/
let playerChoice;
let computerChoice;
let round;
let roundWinner;


  /*----- cached elements  -----*/
const redButton = document.getElementById('redBtn');
const blueButton = document.getElementById('blueBtn');
const yellowButton = document.getElementById('yellowBtn');
const greenButton = document.getElementById('greenBtn');
const startButton = document.getElementById('startBtn');
const playGrid = document.getElementById('playGrid');
const roundNumber = document.getElementById('roundNum');
const againButton = document.getElementById('againBtn');

  /*----- event listeners -----*/
playGrid.addEventListener('click', handleStartGame);
againButton.addEventListener('click', handlePlayAgain);


  /*----- functions -----*/
function handleStartGame(evt) {
  let eventTarget = evt.target;
  if (eventTarget.id !== 'startBtn') {
    return;
  } else {
    console.log('Only the button was clicked! The button is fully working and operational, at your service!')
    init();
    startButton.style.visibility = 'hidden';
  }
}

function init() {
  computerChoice = [];
  playerChoice = [];
  round = 1;
  console.log('Init is working!');
  redButton.addEventListener('click', handleClick);
  blueButton.addEventListener('click', handleClick);
  yellowButton.addEventListener('click', handleClick);
  greenButton.addEventListener('click', handleClick);
  render();
}

function handleClick(evt) {
  const findId = evt.target;
  if (findId.id === 'redBtn') {
    redSound.play();
    redSound.currentTime = 0;
    redButton.style.backgroundColor = 'red';
    setTimeout(redDarker, 200);
    playerChoice.push(COLORS.red);
  } else if (findId.id === 'blueBtn') {
    blueSound.play();
    blueSound.currentTime = 0;
    blueButton.style.backgroundColor = 'blue';
    setTimeout(blueDarker, 200);
    playerChoice.push(COLORS.blue);
  } else if (findId.id === 'yellowBtn') {
    yellowSound.play();
    yellowSound.currentTime = 0;
    yellowButton.style.backgroundColor = 'yellow';
    setTimeout(yellowDarker, 200);
    playerChoice.push(COLORS.yellow);
  } else {
    greenSound.play();
    greenSound.currentTime = 0;
    greenButton.style.backgroundColor = 'green';
    setTimeout(greenDarker, 200);
    playerChoice.push(COLORS.green);
  }
  roundWinner = getRoundWinner();
  console.log(findId);
  console.log(playerChoice);
  if (roundWinner === 0) {
    render();
    round = round + 1;
    playerChoice = [];
  } else if (roundWinner === 1) {
    return;
  }
} 


function render() {
  console.log('Render is working!');
  renderRound();
  setTimeout(renderComputerChoice, 1000);
}

function renderRound() {
    roundNumber.innerText = `Round ${round}`;
}

function renderComputerChoice() {
  let compChoiceNum = Math.floor(Math.random() * 4);
  computerChoice.push(compChoiceNum);
  console.log(computerChoice);
  computerChoice.forEach(compNumPrint);
}

// Callback function for each number that computerChoice array prints out
function compNumPrint(num, index) {
  setTimeout(function() {
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

function getRoundWinner() {
  if (playerChoice.length === computerChoice.length) {
    roundWinnerNum = arrayEquals(computerChoice, playerChoice);
    return roundWinnerNum;
  } else if (playerChoice.length !== computerChoice.length) {
    roundWinnerNum = valueEquals(playerChoice, computerChoice);
    return roundWinnerNum;
  }
}

function arrayEquals(a, b) {
  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index])) {
    console.log(`You got it! Next round!`);
    return 0;
  } else {
    console.log(`You LOSE!`);
    return 1;
  }
}

function valueEquals(a, b) {
  if (Array.isArray(a) && Array.isArray(b) && a.every((val, index) => val === b[index])) {
    console.log(`You're on a streak! Keep it up!`);
  } else {
    console.log(`You LOSE!`);
    return 1;
  }
}


