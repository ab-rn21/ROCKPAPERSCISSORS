let getComputerChoice = () => {
    let random = Math.floor((Math.random() * 3));
    switch(random) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

let getPlayerChoice = () => {
    return prompt("Rock, Paper, or Scissors").toLowerCase();
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock") {
        if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
        } else if(computerSelection == "Scissors") {
            console.log("You Win! Rock beats Scissors");
        } else {
            console.log("Draw");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            console.log("You Lose! Scissors beats Paper");
        } else if(computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
        } else {
            console.log("Draw");
        }
    } else {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
        } else if(computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
        } else {
            console.log("Draw");
        }
    }
}

playRound(getPlayerChoice(), getComputerChoice());
