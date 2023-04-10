// define choices
const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let roundOutcome;
let matchScore = [0,0];
const matchScoreReport = document.querySelector('#MatchScoreReport');

const divResults = document.querySelector("#results");
console.log("Welcome to Rock Paper Scissors!")
// Get the choice from the computer

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[randomNumber];
    return computerChoice;
    // console.log(computerChoice);
   // console.log(randomNumber);
   // console.log(choices[randomNumber]);
}

// get the choice from the user
function getPlayerChoice(btnChoice)
{
    playerChoice = btnChoice;
   // playerChoice = prompt("Please choose rock, paper or scissors").toLowerCase();
    /*if (playerChoice === "rock" || playerChoice === "scissors" || playerChoice === "paper")*/
    {
      //  console.log(playerChoice);
        const playerChoiceReport = document.createElement('p');
        playerChoiceReport.textContent = "You have chosen: " + playerChoice;
        divResults.prepend(playerChoiceReport);
        return playerChoice;
    }
    /* else {
        console.log("That isn't a valid choice. Try again");
        getPlayerChoice();
        } */
}


// resolve who wins the round

function resolveRound(playerChoice, computerChoice)
{
    let roundOutcome;
    const roundOutcomeReport = document.createElement('p');

    if (playerChoice === computerChoice)
    {
        roundOutcome = "tie";
        // console.log("You both chose " + playerChoice + ", so it is a tie.");
        
        roundOutcomeReport.textContent = "You both chose " + playerChoice + ", so it is a tie.";
        divResults.prepend(roundOutcomeReport);
        return roundOutcome;
    }
    else switch (playerChoice) 
    {
        case 'rock':
            switch (computerChoice) 
                {
                    case 'scissors':
                        
                       // console.log("Rock crushes scissors, so you win!");
                        roundOutcome = "victory";
                        roundOutcomeReport.textContent = "Rock crushes scissors, so you win!";
                        divResults.prepend(roundOutcomeReport);
                        break;
                        
                    case 'paper':
                        //console.log("Paper covers rock, so you lose!");
                        roundOutcome = "defeat";
                        roundOutcomeReport.textContent = "Paper covers rock, so you lose!";
                        divResults.prepend(roundOutcomeReport);
                        break;
                }
            return roundOutcome;
            break;
        case 'scissors':
            switch (computerChoice)
                {
                    case 'rock':
                        //console.log("Rock crushes scissors, you lose!");
                        roundOutcome = "defeat";
                        roundOutcomeReport.textContent = "Rock crushes scissors, you lose!";
                        divResults.prepend(roundOutcomeReport);
                        break;
                    case 'paper':
                      //  console.log("Scissors cuts paper, you win!");
                        roundOutcome = "victory";
                        roundOutcomeReport.textContent = "Scissors cuts paper, you win!";
                        divResults.prepend(roundOutcomeReport);
                        break;
                       
                }
            return roundOutcome;
            break;     
        case 'paper':
            switch (computerChoice)
                {
                    case 'rock':
                        //console.log("Paper covers rock, you win!");
                        roundOutcome = "victory";
                        roundOutcomeReport.textContent = "Paper covers rock, you win!";
                        divResults.prepend(roundOutcomeReport);
                        break;
                    case 'scissors':
                        //console.log("Scissors cuts paper, you lose!");
                        roundOutcome = "defeat";
                        roundOutcomeReport.textContent = "Scissors cuts paper, you lose!";
                        divResults.prepend(roundOutcomeReport);
                        
                        break;

                }
        return roundOutcome;
        break;
        
    }   
}

// update score so far
function updateScore(roundOutcome)
{
    if (roundOutcome === "victory")
    {
        matchScore[0] = matchScore[0] + 1;
        let reportScore = "The score is now " + matchScore[0] + "-" + matchScore[1];
       // console.log(reportScore);
        matchScoreReport.textContent = reportScore;
        
    }
    else if(roundOutcome === "defeat") 
    {
        matchScore[1] = matchScore[1] + 1;
        let reportScore = "The score is now " + matchScore[0] + "-" + matchScore[1];
        //console.log(reportScore);
       
        matchScoreReport.textContent = reportScore;
       
    }
    else if(roundOutcome === "tie")
    {
        let reportScore = "The score remains " + matchScore[0] + "-" + matchScore[1];
        //console.log(reportScore);
        
        matchScoreReport.textContent = reportScore;
        
    }
    else
    {
        console.warn("Something broke with scoring");
    }

}
function game()
{
    getComputerChoice();
    
    updateScore(resolveRound(playerChoice, computerChoice));
    
   // getComputerChoice();
    
    //getPlayerChoice();
    //updateScore(resolveRound(playerChoice, computerChoice));
    
/*
    getComputerChoice();
    getPlayerChoice();
    updateScore(resolveRound(playerChoice, computerChoice));

    getComputerChoice();
    getPlayerChoice();
    updateScore(resolveRound(playerChoice, computerChoice));

    getComputerChoice();
    getPlayerChoice();
    updateScore(resolveRound(playerChoice, computerChoice));

    getComputerChoice();
    getPlayerChoice();
    updateScore(resolveRound(playerChoice, computerChoice));
*/
}
// fetch buttons and listen for click events
const btnRock = document.querySelector("#BtnRock");
btnRock.addEventListener('click', function()
{
    getPlayerChoice("rock");
    game();
});
const btnPaper = document.querySelector("#BtnPaper");
btnPaper.addEventListener('click', function()
{
    getPlayerChoice("paper")
    game();
});
const btnScissors = document.querySelector("#BtnScissors");
btnScissors.addEventListener('click', function()
{
    getPlayerChoice("scissors")
    game();
});
// actual execution of functions
//game();

function finalReport()
    {

if (matchScore[0] > matchScore[1])
{
    console.log("Congratulations on winning the match!");
}
else {
    console.log("better luck next time");
}
}
// determine if there should be a new round or if the game has ended
// Once game has ended, declare winner and score
// offer to play again