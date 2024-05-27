const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let tourNumber = document.getElementById("tourNumber");
let number = 0;

function playGame(playerChoice) {
    number++;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    console.log(`Computer: ${computerChoice}`);
    console.log(`Player: ${playerChoice}`);
    console.log(`Points player: ${playerScore}`);
    console.log(`Points comp: ${computerScore}`);
    if(playerChoice === computerChoice) {
        result = "It's a tie!";
         resultDisplay.style.color = "black";
        console.log(result);
    }
     else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!"; break;
            case "paper":
                result = (computerChoice === "scissors") ? "You lose!" : "You win!"; break;
            case "scissors":
                result = (computerChoice === "rock") ? "You lose!" : "You win!" ; break;
        }
        if(result === "You win!") {
            playerScore++;
            resultDisplay.style.color = "green";
        } else {
            computerScore++;
            resultDisplay.style.color = "red";
        }
        console.log(result);
    }
    resultDisplay.textContent = result;
    tourNumber.textContent = `Round: ${number}`;
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}