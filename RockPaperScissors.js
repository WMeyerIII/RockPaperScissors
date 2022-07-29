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
  let computerChoicesArray = ["rock", "paper", "scissors"];

  computerSelection = randomArrayIndexValue(computerChoicesArray);
  console.log(computerSelection);

  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper, or Scissors?");

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

function playRound(computerSelection, playerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerSelection();

  let playerScore = 0;
  let computerScore = 0;
  if (playerSelection === computerSelection) {
    console.log("Tie!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    console.log(`You get a point! Your score is ${playerScore}.`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    console.log(`You get a point! Your score is ${playerScore}.`);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    console.log(`You get a point! Your score is ${playerScore}.`);
  } else {
    console.log.apply(
      `You lose! ${computerSelection} beats ${playerSelection} `
    );
    computerScore += 1;
  }
  console.log(`Your score is ${playerScore}`);
  console.log(`The computer's score is ${computerScore}`);
}
