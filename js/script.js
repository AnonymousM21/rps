let playerChoice, computerChoice;

for (let i = 0; i < 5; i++) {
  let round = `Round ${i + 1}`

  playerChoice = prompt(`${round}. What's your choice?`);
  computerChoice = getComputerChoice();

  console.log(
    `${round} -> you: ${playerChoice} vs computer: ${computerChoice}`
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
  return ps === cs
    ? "It's a tie"
    : ps === "rock" && cs === "paper"
    ? "You Loose! Paper beats Rock"
    : ps === "rock" && cs === "scissor"
    ? "You Won! Rock beats Scissor"
    : ps === "paper" && cs === "rock"
    ? "You Won! Paper beats Rock"
    : ps === "paper" && cs === "scissor"
    ? "You Loose! Scissor beats paper"
    : ps === "scissor" && cs === "rock"
    ? "You Loose! Rock beats Scissor"
    : ps === "scissor" && cs === "paper"
    ? "You Won! Scissor beats Paper"
    : "Unknown Choice!";
}
