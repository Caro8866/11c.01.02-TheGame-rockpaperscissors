// BASIC STRUCTURE

//! Init js
window.addEventListener("DOMContentLoaded", start);

//! Start Game
function start() {
  console.log("start");
  // ? Player makes a choice
  // rock button event listener
  document.querySelector(".rock").addEventListener("click", chooseRock);

  // paper button event listener
  document.querySelector(".paper").addEventListener("click", choosePaper);

  // scissors button event listener
  document.querySelector(".scissors").addEventListener("click", chooseScissors);

  // Hide prior game's outcome
  document.querySelector("#draw").className = "hidden";
  document.querySelector("#win").className = "hidden";
  document.querySelector("#lose").className = "hidden";
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

//! Randomises a choice for computer
function randomiseComputerChoice() {
  console.log("randomiseComputerChoice");
  //  (to get a random number between 1 & 3)
  randomComputerChoice = Math.floor(Math.random() * 3) + 1;

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

//! Show animations
function showAnimations() {
  // shake animation
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showWinner);
}

//! Determine Winner
function showWinner() {
  console.log("Who is the winner?");
  const player = document.querySelector("#player1");
  const computer = document.querySelector("#player2");

  player.className = "player " + playersChoice;
  computer.className = "player " + computerChoice;

  if ((playersChoice == "rock" && computerChoice == "scissors") || (playersChoice == "paper" && computerChoice == "rock") || (playersChoice == "scissors" && computerChoice == "paper")) {
    document.querySelector("#win").classList.remove("hidden");
  } else if (computerChoice == playersChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}
