const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

let result = '';

const computerMove = pickComputerMove();

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = ''

    if(randomNumber >= 0 && randomNumber <= 1/3){
        computerMove = 'rock'
    } else if(randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove = 'paper'
    } else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors'
    }

    return computerMove;
}

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = ''
    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie.';
        } else if (computerMove === 'paper'){
            result = 'You lose.';
        } else if(computerMove === 'scissors'){
            result = 'You win.'
        }
        
    } else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You win.';
        } else if (computerMove === 'paper'){
            result = 'Tie.';
        } else if(computerMove === 'scissors'){
            result = 'You lose.'
        }

    } else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You lose.';
        } else if (computerMove === 'paper'){
            result = 'You win.';
        } else if(computerMove === 'scissors'){
            result = 'Tie.'
        }
    }
    
    if(result === 'You win.'){
        score.wins += 1
    } else if(result === 'You lose.'){
        score.losses += 1
    } else if(result === 'Tie.'){
        score.ties += 1
    }

    alert(`You picked ${playerMove}. The computer picked ${computerMove}. ${result}. 
Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}. `)
}

