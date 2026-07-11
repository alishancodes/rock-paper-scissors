// computerChoice/humanChoice = 1 is rock
// computerChoice/humanChoice = 2 is paper
// computerChoice/humanChoice = 3 is scissors


function getHumanChoice() {

    do {
        let user = prompt("Choose b/w rock, paper, scissors");

        let input = user.toLowerCase();

        if (input === "rock") {
            return 0;
        }
        else if (input === "paper") {
            return 1;
        }
        else if (input === "scissors") {
            return 2;
        }
        else {
            alert("Wrong input!! Try Again")
        }
    } while (true);
}




function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
    // console.log(randomNumber);
}

let humanScore = 0;
let computerScore = 0;


// console.log(computerChoice);
// console.log(humanChoice);

function playRound(humanChoice, computerChoice) {
    if ((computerChoice === 0) && (humanChoice === 1)) {
        ++humanScore;
        return "user";
    } else if ((computerChoice === 1) && (humanChoice === 0)) {
        ++computerScore;
        return "computer";
    } else if ((computerChoice === 1) && (humanChoice === 2)) {
        ++humanScore;
        return "user";
    } else if ((computerChoice === 2) && (humanChoice === 1)) {
        ++computerScore;
        return "computer";
    } else if ((computerChoice === 2) && (humanChoice === 0)) {
        ++humanScore;
        return "user";
    } else if ((computerChoice === 0) && (humanChoice === 2)) {
        ++computerScore;
        return "computer";
    } else {
        return "Draw";
    }
}



function startGame() {
    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);

        if (result === "user") { console.log(`User won round - ${i}\nUser : ${humanScore}\nComputer : ${computerScore}\n`); }
        else if (result === "computer") { console.log(`Computer won round - ${i}\nUser : ${humanScore}\nComputer : ${computerScore}\n`); }
        else { console.log(`Round - ${i} was drawn\nUser : ${humanScore}\nComputer : ${computerScore}\n`); }
    }
}

startGame();

if (humanScore > computerScore) {
    console.log(`User Wins!!\nScore of User is ${humanScore}\nScore of Computer is ${computerScore}\n`);
} else if (computerScore > humanScore) {
    console.log(`Computer Wins!!\nScore of User is ${humanScore}\nScore of Computer is ${computerScore}\n`);
} else {
    console.log(`This is a draw!!\nScore of User is ${humanScore}\nScore of Computer is ${computerScore}\n`);
}