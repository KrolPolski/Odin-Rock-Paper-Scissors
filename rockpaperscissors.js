// define choices
const choices = ["rock", "paper", "scissors"];

console.log("Welcome to Rock Paper Scissors!")
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
function getPlayerChoice()
{
    playerChoice = prompt("Please choose rock, paper or scissors").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "scissors" || playerChoice === "paper")
    {
        console.log(playerChoice);
        return playerChoice;
    }
    else {
        console.log("That isn't a valid choice. Try again");
        getPlayerChoice();
        }
}

getPlayerChoice();
// resolve who wins
// report who wins to the user
// update score so far
// determine if there should be a new round or if the game has ended
// Once game has ended, declare winner and score
// offer to play again