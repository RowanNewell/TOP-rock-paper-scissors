function game(){

let playerScore = 0;
let computerScore = 0;


for (let i = 1; i <= 5; i++) { 
    let playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
    console.log(playerSelection);
    let computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);

    console.log('round ' + i);

    if (i === 5){
        if (playerScore > computerScore){
            alert('Congratulations! You won the game. The final score is: ' + playerScore + ' | Computer ' + computerScore);
        } else if (playerScore < computerScore){
            alert('Sorry fam! You lost the game. The final score is: ' + playerScore + ' | Computer ' + computerScore);
        } else { 
            alert('Well what do you know, it\'s a draw! The final score is: ' + playerScore + ' | Computer ' + computerScore);
        }
    }
 }

function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomNum3 = Math.floor(Math.random()*3);
    
    console.log('computerPlay')

    return options[randomNum3];
    
}


function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

     if(player === 'rock' && computer === 'scissors'){
        console.log('You win this round! Rock beats Scissors!');
        playerScore ++;
        console.log('The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
    } else if (player === 'scissors' && computer === 'rock'){
        console.log( 'You Lose this round! Rock beats Scissors!');
        computerScore ++;
        console.log('The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
    } else if (player === 'scissors' && computer === 'paper'){
        console.log( 'You win this round! Scissors beats Paper!');
        playerScore ++;
        console.log('The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
    } else if (player === 'paper' && computer === 'scissors'){
        console.log( 'You Lose this round! Scissors beats Paper!');
        computerScore ++;
        console.log('The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
    } else if (player === 'paper' && computer === 'rock'){
        console.log( 'You win this round! Paper beats Rock!');
        playerScore ++;
        console.log('The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
    } else if (player === 'rock' && computer === 'paper'){
        console.log( 'You Lose this round! Paper beats Rock!');computerScore ++;
        computerScore ++;
        console.log('The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
    } else if (player === computer){
        console.log( 'It\'s a draw! You both chose ' + player + '!');
        console.log('The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
    } else {
        console.log( 'Please enter a valid play');
    }
  //console.log('playRound');
}


}