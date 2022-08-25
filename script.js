// BASIC STRUCTURE

// Init js
window.addEventListener("DOMContentLoaded", start());

// Start Game
function start() {
  console.log("start");
  getUserSelection();
}

// Player makes a choice
function getUserSelection() {
  console.log("getUserSelection");
  // rock button event listener
  document.querySelector(".rock").addEventListener("click", chooseRock);
  // paper button event listener
  document.querySelector(".paper").addEventListener("click", choosePaper);

  // scissors button event listener
  document.querySelector(".scissors").addEventListener("click", chooseScissors);
}

// Player chooses rock
function chooseRock() {
  console.log("Player has chosen Rock");
  playersChoice = "rock";
  randomiseComputerChoice();
}

// Player chooses paper
function choosePaper() {
  console.log("Player has chosen Paper");
  playersChoice = "paper";
  randomiseComputerChoice();
}

// Player chooses scissors
function chooseScissors() {
  console.log("Player has chosen Scissors");
  playersChoice = "scissors";
  randomiseComputerChoice();
}

// Randomises a choice for computer
function randomiseComputerChoice() {
  console.log("randomiseComputerChoice");
  //  (to get a random number between 1 & 3)
  randomComputerChoice = Math.floor(Math.random() * 3) + 1;

  // rock === 1
  // paper === 2
  // scissors === 3

  if (randomComputerChoice === 1) {
    computerChoice = "rock";
    console.log("Computer has chose Rock");
  } else if (randomComputerChoice === 2) {
    computerChoice = "paper";
    console.log("Computer has chosen Paper");
  } else if (randomComputerChoice === 3) {
    computerChoice = "scissors";
    console.log("Computer has chosen Scissors");
  }

  showAnimations();
}

// Show animations
function showAnimations() {
  // shake animation
  // specific animations for both choices
  determineWinner();
}

// Winner
let winner = "";

// Determine Winner
function determineWinner() {
  // if playerChoice = "rock" & computerChoice ="paper"
  // if playerChoice = "paper" & computerChoice ="scissors"
  // if playerChoice = "scissors" & computerChoice ="rock"

  // computer wins

  winner = "computer";

  // if player win
  showGameResult();
}

function showGameResult() {
  //   if (winner = "computer")
  //     //show lose screen
  // } else if (winner = "player") {
  //   // show win screen
  //   console.log("Player Won")
  // }
  // else if (winner = "tied") {
}

function showWin() {
  console.log("Show win!");
  // show You Won text
}

function showLose() {
  if ((winner = "computer")) {
    //show lose screen
  }
}

function showDraw() {}
