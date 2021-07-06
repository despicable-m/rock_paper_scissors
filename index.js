let gameSelections = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    let selection = Math.floor(Math.random() * (gameSelections.length));
    return gameSelections[selection]
}

let playerResult = 0;
let computerResult = 0;

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerResult += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerResult += 1;
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === 'rock' && computerSelection ==='rock') {
        return `It's a tie`
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `It's a tie`
    }
    else if (playerSelection === 'paper' && computerSelection ==='scissors') {
        computerResult += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerResult += 1;
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === 'scissors' && computerSelection ==='rock') {
        computerResult += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerResult += 1;
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === 'scissors' && computerSelection ==='scissors') {
        return `It's a tie`
    }
    else return 'Error';  
}

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const winnerDeclare = document.querySelector('#winnerDeclare');


let numOfPlay = 0;
function game(e) {
    playerSelection = e.srcElement.id;
    computerSelection = computerPlay();

    play(playerSelection, computerSelection);
    playerScore.textContent = `You played ${playerSelection}: ${playerResult}`;
    computerScore.textContent = `Computer played ${computerSelection}: ${computerResult}`;
    
    numOfPlay+=1;
    if (numOfPlay === 5) {
        showResult();
    }
    else if (numOfPlay > 5) {
        numOfPlay = 0;
        playerResult = 0;
        computerResult = 0;
        playerScore.textContent = "";
        computerScore.textContent = "";
        winnerDeclare.textContent = ""; 
    }
}

function showResult() {
    if (playerResult < computerResult) {
        winnerDeclare.textContent = "Computer wins!!!";
    }
    else if (playerResult > computerResult) {
        winnerDeclare.textContent = "You win!!!";
    }
    else winnerDeclare.textContent = "It's a draw."
}

const plays = document.querySelectorAll('.play');
plays.forEach(played => played.addEventListener('click', game));