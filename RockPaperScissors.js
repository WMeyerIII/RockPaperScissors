/*
use underscores instead of camelcase next time for variables?

Create Random picker for computer
Get computer choice
Get player choice

*/

function randomArrayIndexValue(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomIndexValue = array[randomIndex];
  return randomIndexValue;
}

function getComputerSelection() {
  computerChoicesArray = ["rock", "paper", "scissors"];

  computerSelection = randomArrayIndexValue(computerChoicesArray);
  console.log(computerSelection);

  return computerSelection;
}

function getPlayerChoice() {
  playerSelection = prompt("Rock, Paper, or Scissors?");

  while (
    playerSelection.toLowerCase() !== "rock" &&
    playerSelection.toLowerCase() !== "paper" &&
    playerSelection.toLowerCase() !== "scissors"
  ) {
    playerSelection = prompt(
      "Type in your selection: Rock, Paper, or Scissors."
    );
  }
  console.log(playerSelection);
  return playerSelection.toLowerCase();
}

getPlayerChoice();
