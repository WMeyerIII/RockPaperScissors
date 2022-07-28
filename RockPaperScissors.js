function getComputerChoice() {
  let computerChoicesArray = ["Rock", "Paper", "Scissors"];

  choice = Math.floor(Math.random() * computerChoicesArray.length);

  return computerChoicesArray[choice];
}
