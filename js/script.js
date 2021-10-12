function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomNum3 = Math.floor(Math.random()*3);

    return options[randomNum3];
}