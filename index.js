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

function game(e) {
    playerSelection = e.srcElement.id;
    computerSelection = computerPlay();

    console.log(play(playerSelection, computerSelection));
    console.log(playerResult+"\n");
    console.log(computerResult+"\n");
}



// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors');

const plays = document.querySelectorAll('.play');
plays.forEach(played => played.addEventListener('click', game));