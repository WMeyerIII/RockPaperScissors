/*
use underscores instead of camelcase next time for variables?

Create Random picker for computer
Get computer choice
Get player choice

*/

let playerScore = 0;
let computerScore = 0;

function randomArrayIndexValue(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomIndexValue = array[randomIndex];
  return randomIndexValue;
}

function getComputerSelection() {
  let computerChoicesArray = ["rock", "paper", "scissors"];

  computerSelection = randomArrayIndexValue(computerChoicesArray);
  console.log(`Computer chose: ${computerSelection}`);

  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper, or Scissors?");

  if (playerSelection) {
    console.log(playerSelection);
  } else {
    return console.log("Player cancelled.");
  }

  while (
    playerSelection.toLowerCase() !== "rock" &&
    playerSelection.toLowerCase() !== "paper" &&
    playerSelection.toLowerCase() !== "scissors"
  ) {
    playerSelection = prompt("Please type Rock, Paper, or Scissors.");
  }
  return playerSelection.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
  playerSelection = getPlayerChoice();
  // playerSelection = "rock";
  computerSelection = getComputerSelection();

  if (playerSelection === computerSelection) {
    console.log("Tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}. \nYou get a point! Your score is ${playerScore}.
    `);
  } else {
    computerScore++;
    console.log(
      `You lose! ${computerSelection} beats ${playerSelection}. \nComputer gets a point. Computer's score is ${computerScore}`
    );
  }
}

function winState(playerScore, computerScore) {
  winner =
    playerScore > computerScore
      ? "You win!"
      : computerScore > playerScore
      ? "Computer wins!"
      : "No winner! Tie!";
  return console.log(winner);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(
      `Your score is ${playerScore} \nComputer's score is ${computerScore}
    `
    );
  }
  winState(playerScore, computerScore);
}

game();
