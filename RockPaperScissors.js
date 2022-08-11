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
  let playerSelection = prompt("Rock, Paper, or Scissors?");

  if (playerSelection) {
    console.log(playerSelection);
  } else {
    console.log("Player cancelled.");
    return playerSelection;
  }

  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt("Please type Rock, Paper, or Scissors.");
  }
  return playerSelection;
}

function playRound(
  playerSelection,
  computerSelection,
  playerScore,
  computerScore
) {
  if (playerSelection === computerSelection) {
    console.log("Tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log(
      `You win! ${playerSelection} beats ${computerSelection}.\nYou get a point! \nPlayer's score is ${playerScore}. Computer's score is ${computerScore}`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${computerSelection} beats ${playerSelection}.\nComputer gets a point.\nPlayer's score is ${playerScore}. Computer's score is ${computerScore}`
    );
  }
  return [playerSelection, playerScore, computerScore];
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
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playerSelection = getPlayerSelection();

    if (!playerSelection) {
      console.log("You cancelled the game. Boo.");
      break;
    } else {
      computerSelection = getComputerSelection();

      roundInfo = playRound(
        playerSelection,
        computerSelection,
        playerScore,
        computerScore
      );

      playerScore = roundInfo[1];
      computerScore = roundInfo[2];
    }
  }
  winState(playerScore, computerScore);
}

game();
