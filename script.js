function getComputerChoice(){ //This function make ramdom computer's choice.
  const choice = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random()*choice.length);
  return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) { //This function make win and lose messages.
  const playerChoice = playerSelection.toLowerCase();
  const winMessage = 'You Win ' + playerChoice + ' beats ' + computerSelection;
  const loseMessage = 'You Lose ' + computerSelection + ' beats ' + playerChoice;

  if(playerChoice === computerSelection)
  {
    return 'It is Tie!'
  }
  else if(
    (playerChoice === 'rock' && computerSelection === 'scissors') ||
    (playerChoice === 'paper' && computerSelection === 'rock') ||
    (playerChoice === 'scissors' && computerSelection === 'paper')
  )
  {
    return winMessage;
  }
  else
  {
    return loseMessage;
  }
}

function game(){

  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++){ //This is make 5 loop for game.
    const playerSelection = prompt("Write rock, paper or scissors!");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if(result.startsWith("You Win"))
    {
      playerScore++;
    }
    else if(result.startsWith("You Lose"))
    {
      computerScore++;
    }
  }

  if(playerScore > computerScore)
  {
    console.log("You Win This Game!");
  }
  else if(playerScore < computerScore)
  {
    console.log("You Lose This Game!!!");
  }
}
 
game();

 
