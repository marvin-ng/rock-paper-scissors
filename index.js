let humanScore = 0;
let computerScore = 0;

/// computer choice code - console.log ("computer chose" + getComputerChoice(3))
function getComputerChoice(max) {
  const choice = Math.floor(Math.random() * max);
  if (choice === 0) {
    return "Computer chose rock";
  } else if (choice === 1) {
    return "Computer chose paper";
  } else if (choice === 2) {
    return "Computer chose scissors";
  }
  return choice;
}

/// player choice - console.log (getHumanChoice())

function getHumanChoice() {
  const humanChoice = prompt("What do you choose? rock, paper, scissors");
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    console.log("you chose" + " " + humanChoice);
  }
}

function playRound(humanChoice2, computerChoice) {
  if (humanChoice2 === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock!");
  } else if (humanChoice2 === "rock" && computerChoice === "scissors") {
    console.log("You win! rock beats scissors");
  } else if (humanChoice2 === "rock" && computerChoice === "rock") {
    console.log("Tie!!");
  } else if (humanChoice2 === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper");
  } else if (humanChoice2 === "scissors" && computerChoice === "rock") {
    console.log("You lose! rock beats scissors");
  } else if (humanChoice2 === "scissors" && computerChoice === "scissors") {
    console.log("Tie!!");
  } else if (humanChoice2 === "paper" && computerChoice === "rock") {
    console.log("You win!");
  } else if (humanChoice2 === "paper" && computerChoice === "scissors") {
    console.log("You lose!");
  } else if (humanChoice2 === "paper" && computerChoice === "paper") {
    console.log("Tie!");
  }
}

const humanChoice2 = getHumanChoice;
const computerChoice = getComputerChoice;

console.log(playRound(humanChoice2, computerChoice));
