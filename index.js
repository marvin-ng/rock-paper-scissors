function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Computer chose rock";
    }
    else if (choice === 1) {
        return "Computer chose paper";
    }
    else if (choice === 2) {
        return "Computer chose scissors"
    }
    return choice;

}

/// computer choice code - console.log ("computer chose" + getComputerChoice(3))

function getHumanChoice() {
    const humanChoice = prompt("What do you choose? rock, paper, scissors");
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log ("you chose" +" "+ humanChoice);
    }

}