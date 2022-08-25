// SCAFFOLDING STRUCTURE

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
  randomiseComputerChoice();
}

// Randomises a choice for computer
function randomiseComputerChoice() {
  console.log("randomiseComputerChoice");

  // randomMath
  // rock === 1
  // paper === 2
  // scissors === 3

  showAnimations();
}

// Show animations
function showAnimations() {
  determineWinner();
}

// Winner
let winner = "";

// Determine Winner
function determineWinner() {
  // FAKED so player always win
  winner = "player";

  // if player win
  showWin();
}

function showWin() {
  console.log("Show win!");
  // show You Won text
}

function showLose() {}

function showDraw() {}
