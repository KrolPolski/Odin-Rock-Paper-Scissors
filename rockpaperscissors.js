// define choices
const choices = ["Rock", "Paper", "Scissors"];

// Get the choice from the computer

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];
    // console.log(computerChoice);
   // console.log(randomNumber);
   // console.log(choices[randomNumber]);
}

getComputerChoice();

// get the choice from the user

// resolve who wins
// report who wins to the user
// update score so far
// determine if there should be a new round or if the game has ended
// Once game has ended, declare winner and score
// offer to play again