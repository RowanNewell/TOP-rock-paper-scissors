function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomNum3 = Math.floor(Math.random()*3);

    return options[randomNum3];
}


function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if(player === 'rock' && computer === 'scissors'){
        console.log('You win! Rock beats Scissors!');
    } else if (player === 'scissors' && computer === 'rock'){
        console.log('You Lose! Rock beats Scissors!');
    } else if (player === 'scissors' && computer === 'paper'){
        console.log('You win! Scissors beats Paper!');
    } else if (player === 'paper' && computer === 'scissors'){
        console.log('You Lose! Scissors beats Paper!');
    } else if (player === 'paper' && computer === 'rock'){
        console.log('You win! Paper beats Rock!');
    } else if (player === 'rock' && computer === 'Paper'){
        console.log('You Lose! Paper beats Rock!');
    } else if (player === computer){
        console.log('It\'s a drawer! You both chose ' + player + '!');
    } else {
        console.log('Please enter a valid play');
    }
  
}
  
  const playerSelection = "rock";
  let computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));