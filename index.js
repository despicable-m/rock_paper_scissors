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

console.log(game())

function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter a selection");
    const computerSelection = computerPlay();
    console.log(play(playerSelection, computerSelection))
    }
    console.log(`Player: ${playerResult}\n Computer: ${computerResult}`)
    if (playerResult > computerResult) return "Player wins"
    else if (computerResult > playerResult) return "Computer wins"
    else return "It's a tie"
}
