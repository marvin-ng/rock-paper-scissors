function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissors"
    }
    return choice;

}

/// computer choice code - console.log (getComputerChoice(3))

function getHumanChoice() {
    const humanChoice = prompt("What do you choose? rock, paper, scissors");
    const answer = humanChoice ()

}