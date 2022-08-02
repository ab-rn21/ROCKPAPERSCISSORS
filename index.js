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
            return -1;
        } else if(computerSelection == "Scissors") {
            console.log("You Win! Rock beats Scissors");
            return 1;
        } else {
            console.log("Draw");
            return 0;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            return -1;
        } else if(computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
            return 1;
        } else {
            console.log("Draw");
            return 0;
        }
    } else {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
            return -1;
        } else if(computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
            return 1;
        } else {
            console.log("Draw");
            return 0;
        }
    }
}

// function game() {
//     let userScore, computerScore;
//     userScore = computerScore = 0;
//     let result;
//     for (let i = 0; i < 5; i++) {
//         result = playRound(getPlayerChoice(),getComputerChoice());
//         if (result == 1) {
//             userScore++;
//         } else if (result == -1) {
//             computerScore++;
//         } else {
//             continue;
//         }
//     }
//     console.log("User: ", userScore);
//     console.log("Computer: ", computerScore);
//     if (userScore > computerScore) {
//         console.log("User Wins!");
//     } else if (userScore < computerScore) {
//         console.log("Computer Wins!");
//     } else {
//         console.log("No Winner!");
//     }
// }

// game();
