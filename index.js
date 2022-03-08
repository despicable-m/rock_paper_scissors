let gameSelections = ["rock", "paper", "scissors"]

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
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');


function game(e) {
    playerSelection = e.srcElement.id;
    computerSelection = computerPlay();

    play(playerSelection, computerSelection);
    playerScore.textContent = `${playerResult}`;
    computerScore.textContent = `${computerResult}`;
    
    player.textContent = `${emojify(playerSelection)}`;
    computer.textContent = `${emojify(computerSelection)}`;

    if (computerResult === 5 || playerResult === 5) {
        playerScore.textContent = "";
        computerScore.textContent = "";
        showResult();
        playerResult = 0;
        computerResult = 0;
    }
}

function showResult() {
    playerScore.textContent = `${playerResult}`;
    computerScore.textContent = `${computerResult}`;
    if (playerResult < computerResult) {
       alert(`Computer wins!!! ${playerResult} - ${computerResult}`);
    }
    else if (playerResult > computerResult) {
        alert(`You win!!! ${playerResult} - ${computerResult}`);
    }
}

const plays = document.querySelectorAll('.play');
plays.forEach(played => played.addEventListener('click', game));


function emojify(selection){
    if (selection === "rock") return '✊';
    if (selection === "paper") return '✋';
    if (selection === "scissors") return '✌️';
}