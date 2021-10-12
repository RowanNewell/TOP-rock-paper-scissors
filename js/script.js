function game(){

    let playerScore = 0;
    let computerScore = 0;


    for (let i = 1; i <= 5; i++) { 
        let playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

        console.log('round ' + i);

        if (i === 5){
            if (playerScore > computerScore){
                alert('Congratulations! You won the game. \nThe final score is: ' + playerScore + ' | Computer ' + computerScore);
            } else if (playerScore < computerScore){
                alert('Sorry fam! You lost the game. \nThe final score is: ' + playerScore + ' | Computer ' + computerScore);
            } else { 
                alert('Well what do you know, it\'s a draw! \nThe final score is: ' + playerScore + ' | Computer ' + computerScore);
            }
        }
    }

    function computerPlay(){
        let options = ['Rock', 'Paper', 'Scissors'];
        let randomNum3 = Math.floor(Math.random()*3);
        
        return options[randomNum3];
        
    }


    function playRound(playerSelection, computerSelection) {
        const player = playerSelection.toLowerCase();
        const computer = computerSelection.toLowerCase();

        if(player === 'rock' && computer === 'scissors'){
            playerScore ++;
            alert('You win this round! ' + player + ' beats ' + computer + '! \n The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
        } else if (player === 'scissors' && computer === 'rock'){
            computerScore ++;
            alert('You lose this round! ' + computer + ' beats ' + player + '! \n The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
        } else if (player === 'scissors' && computer === 'paper'){
            playerScore ++;
            alert('You win this round! ' + player + ' beats ' + computer + '! \n The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
        } else if (player === 'paper' && computer === 'scissors'){
            computerScore ++;
            alert('You lose this round! ' + computer + ' beats ' + player + '! \n The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
        } else if (player === 'paper' && computer === 'rock'){
            playerScore ++;
            alert('You win this round! ' + player + ' beats ' + computer + '! \n The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
        } else if (player === 'rock' && computer === 'paper'){
            computerScore ++;
            alert('You lose this round! ' + computer + ' beats ' + player + '! \n The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
        } else if (player === computer){
            alert('It\s a draw! You both chose ' + computer + '! \n The score is currently: Player ' + playerScore + ' | Computer ' + computerScore);
        } else {
            alert('Please enter a valid choice. No points allocated this round.');
        }
    
    }


}