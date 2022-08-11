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
  let computerSelectionsArray = ["rock", "paper", "scissors"];

  computerSelection = randomArrayIndexValue(computerSelectionsArray);
  console.log(`Computer chose: ${computerSelection}`);

  return computerSelection;
}

function getPlayerSelection() {
  let playerSelection = "";

  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt("Please type Rock, Paper, or Scissors.");
    if (!playerSelection) break;
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let roundWinner = null;

  if (playerSelection === computerSelection) {
    console.log("Tie!");
    roundWinner = -1;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    roundWinner = 0;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    roundWinner = 1;
  }
  return roundWinner;
}

function winState(score) {
  playerScore = score[0];
  computerScore = score[1];

  gameWinner =
    playerScore > computerScore
      ? "You win!"
      : computerScore > playerScore
      ? "Computer wins!"
      : "No winner! Tie!";
  return console.log(gameWinner);
}

function scoreState(roundWinner, score) {
  if (roundWinner === 0) {
    score[0] += 1;
  }

  if (roundWinner === 1) {
    score[1] += 1;
  }
  console.log(`Player's score is ${score[0]}, Computer's score is ${score[1]}`);
  return score;
}

function game() {
  let score = [0, 0];

  for (let i = 0; i < 5; i++) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();

    if (!playerSelection) {
      console.log("You cancelled the game. Boooo");
      break;
    }

    roundWinner = playRound(playerSelection, computerSelection);
    score = scoreState(roundWinner, score);
  }
  winState(score);
}

game();
