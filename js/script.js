let playerChoice, computerChoice;

for (let i = 0; i < 5; i++) {
  playerChoice = prompt("What's your choice?");
  computerChoice = getComputerChoice();

  console.log(
    `Round ${i + 1} -> you: ${playerChoice} vs computer: ${computerChoice}`
  );

  console.log(playRound(playerChoice, computerChoice));
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = Math.floor(Math.random() * choices.length);

  return choices[choice];
}

function playRound(ps, cs) {
  ps = ps.toLowerCase();

  if (ps === cs)
    return "It's a tie!";
  else if (ps === "rock" && cs === "paper")
    return "You Loose! Paper beats Rock";
  else if (ps === "rock" && cs === "scissor")
    return "You Won! Rock beats Scissor";
  else if (ps === "paper" && cs === "rock")
    return "You Won! Paper beats Rock";
  else if (ps === "paper" && cs === "scissor")
    return "You Loose! Scissor beats paper";
  else if (ps === "scissor" && cs === "rock")
    return "You Loose! Rock beats Scissor";
  else if (ps === "scissor" && cs === "paper")
    return "You Won! Scissor beats Paper";
  else
    return "Unknown Choice!";
}
