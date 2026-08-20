let humanChoice, computerChoice, result;
let humanScore = 0, computerScore = 0, i = 1;

// adding the event to parent to rps buttons
const parentBtn = document.querySelector(".options");
const buttons = parentBtn.querySelectorAll("button");
const restartBtn = document.querySelector("#restart");

parentBtn.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return; // only accept the buttons' clicks  , not the parents

    humanChoice = (event.target.textContent).toLowerCase();

    computerChoice = getComputerChoice();

    result = playRound(humanChoice, computerChoice);

    point(result, humanScore, computerScore, i);

    i++;

    if (humanScore === 5 || computerScore === 5) {

        buttons.forEach(button => {
            button.disabled = true;
        });

        final(humanScore, computerScore);
    }
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    if ((computerChoice === "rock") && (humanChoice === "paper")) {
        ++humanScore;
        return "user";

    } else if ((computerChoice === "paper") && (humanChoice === "rock")) {
        ++computerScore;
        return "computer";

    } else if ((computerChoice === "paper") && (humanChoice === "scissors")) {
        ++humanScore;
        return "user";

    } else if ((computerChoice === "scissors") && (humanChoice === "paper")) {
        ++computerScore;
        return "computer";

    } else if ((computerChoice === "scissors") && (humanChoice === "rock")) {
        ++humanScore;
        return "user";

    } else if ((computerChoice === "rock") && (humanChoice === "scissors")) {
        ++computerScore;
        return "computer";

    } else {
        return "Draw";
    }
}

let score = document.querySelector(".score");

function point(result, humanScore, computerScore, i) {
    if (result === "user") {
        score.textContent = (`User won round - ${i}\nUser : ${humanScore}\nComputer : ${computerScore}\n`);
    }
    else if (result === "computer") {
        score.textContent = (`Computer won round - ${i}\nUser : ${humanScore}\nComputer : ${computerScore}\n`);
    }
    else {
        score.textContent = (`Round - ${i} was drawn\nUser : ${humanScore}\nComputer : ${computerScore}\n`);
    }
}

function final(humanScore, computerScore) {
    if (humanScore > computerScore) {
        score.textContent = (`User Wins!!\nScore of User is ${humanScore}\nScore of Computer is ${computerScore}\n`);
    } else if (computerScore > humanScore) {
        score.textContent = (`Computer Wins!!\nScore of User is ${humanScore}\nScore of Computer is ${computerScore}\n`);
    } else {
        score.textContent = (`This is a draw!!\nScore of User is ${humanScore}\nScore of Computer is ${computerScore}\n`);
    }
}

restartBtn.addEventListener("click", () => {
    location.reload();
});

// to toggle b/w night and day mode
const toggle = document.querySelector("#toggle");
let mode = "day";

toggle.addEventListener("click" , () => {
    if(mode === "day"){
    document.body.style.backgroundColor = "#FFF8E7";
    document.body.style.color = "#3B372F";

    buttons.forEach(button => {
        button.style.backgroundColor = "#F5E8C8";
        button.style.color = "#3B372F";
        button.style.border = "2px solid #E5D5AD";
    }); 

        mode = "night";
    }
    else{
        document.body.style.backgroundColor = "#18191A";
        document.body.style.color = "#E6E6E3";

        buttons.forEach(button => {
            button.style.backgroundColor = "#292A2B";
            button.style.color = "#E6E6E3";
            button.style.border = "2px solid #3A3B3C";
        });

        mode = "day";
    }
});
