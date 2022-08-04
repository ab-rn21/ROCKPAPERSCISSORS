let userScore, computerScore;
    userScore = computerScore = 0;
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

let playRound = (playerSelection, computerSelection) => {

    let result = document.querySelector(".battleGround");
    let body = document.querySelector(".body");
    body.removeChild(result);
    result = document.createElement("p");
    result.classList.add("text");
    body.appendChild(result);
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result.appendChild(document.createTextNode("You Lose Round! Paper beats Rock"));
            return -1;
        } else if(computerSelection == "scissors") {
            result.appendChild(document.createTextNode("You Win Round! Rock beats Scissors"));
            return 1;
        } else {
            result.appendChild(document.createTextNode("Draw"));
            return 0;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            result.appendChild(document.createTextNode("You Lose Round! Scissors beats Paper"));
            return -1;
        } else if(computerSelection == "rock") {
            result.appendChild(document.createTextNode("You Win Round! Paper beats Rock"));
            return 1;
        } else {
            result.appendChild(document.createTextNode("Draw"));
            return 0;
        }
    } else {
        if (computerSelection == "rock") {
            result.appendChild(document.createTextNode("You Lose! Rock beats Scissors"));
            return -1;
        } else if(computerSelection == "paper") {
            result.appendChild(document.createTextNode("You Win! Scissors beats Paper"));
            return 1;
        } else {
            result.appendChild(document.createTextNode("Draw"));
            return 0;
        }
    }
    

}


function playerChoice(e) {
    let userChoice = e.target.alt;
    console.log(userChoice);
    let temp = document.querySelector('.images').innerHTML;
    let elToDel = document.querySelector('.images').parentElement;
    elToDel.removeChild(document.querySelector('.images'));
    let battleGround = document.createElement("div");
    elToDel.appendChild(battleGround);
    let user = document.createElement("div");
    let player = document.createElement("div");
    battleGround.classList.add("battleGround");
    user.classList.add("user");
    player.classList.add("player");
    battleGround.appendChild(user);
    battleGround.appendChild(player);
    user.appendChild(document.createElement("p"));
    player.appendChild(document.createElement("p"));
    user.firstChild.appendChild(document.createTextNode("User"));
    player.firstChild.appendChild(document.createTextNode("Player"));
    user.appendChild(document.createElement("img"));
    player.appendChild(document.createElement("img"));
    

    if (userChoice == "rock") {
        user.lastChild.src = "img/rock.jpeg";
    } else if (userChoice == "paper") {
        user.lastChild.src = "img/paper.png";
    } else {
        user.lastChild.src = "img/scissors.png";
    }

    let computerChoice = getComputerChoice();

    if (computerChoice === "Rock") {
        player.lastChild.src = "img/rock.jpeg";
    } else if (computerChoice === "Paper") {
        player.lastChild.src = "img/paper.png";
    } else {
        player.lastChild.src = "img/scissors.png";
    }
    
    setTimeout(() => {
        let result =  playRound(String(userChoice).toLowerCase(), String(computerChoice).toLowerCase());
        let scoreCardUser = document.querySelector(".userScore");
        let scoreCardComputer = document.querySelector(".computerScore");
        if (result == 1) {
            userScore++;
            scoreCardUser.textContent = "User: " + userScore;
        } else if (result == -1) {
            computerScore++;
            scoreCardComputer.textContent = "Computer: " + computerScore;
        }   
    }, 1000);
    

    let body = document.querySelector(".body");
    setTimeout(() => {
        body.removeChild(body.lastChild);
    }, 2000);
    
    // let images = document.createElement("div").classList.add("images");
    // body.appendChild(images);
    // images.innerHTML = temp;
}

let body = document.getElementsByTagName('body');
body[0].addEventListener('click', function(e) {
    if (e.target.classList.contains("img")) {
        playerChoice(e);
    }
});
