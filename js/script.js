let computerScore = 0,
  playerScore = 0;
const btnContainer = document.querySelector(".btnContainer");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const playScore = document.querySelector(".playScore");
const compScore = document.querySelector(".compScore");
const finalResult = document.querySelector(".finalResult");

btnContainer.addEventListener("click", (evt) => {
  const targetChild = evt.target;
  switch (targetChild.id) {
    case "rock":
      result.textContent = playRound("rock", getComputerChoice());
      incrementScore();
      checkWinner();
      break;
    case "paper":
      result.textContent = playRound("paper", getComputerChoice());
      incrementScore();
      checkWinner();
      break;
    case "scissor":
      result.textContent = playRound("scissor", getComputerChoice());
      incrementScore();
      checkWinner();
      break;
  }
});

function incrementScore() {
  if (result.textContent.includes("Won")) {
    ++playerScore;
    displayScoreResult();
  } else if (result.textContent.includes("Loose")) {
    ++computerScore;
    displayScoreResult();
  } else {
    displayScoreResult();
  }
}

function displayScoreResult() {
  playScore.textContent = `Player Score: ${playerScore}`;
  compScore.textContent = `Computer Score: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 5) {
    finalResult.textContent = `You Won ${playerScore}-${computerScore}! Refresh the page to play again.`;
    endGame();
  } else if (computerScore === 5) {
    finalResult.textContent = `You Lost ${playerScore}-${computerScore}! Refresh the page to play again.`;
    endGame();
  }
}

function endGame() {
  for (btn of btnContainer.children) btn.disabled = true;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = Math.floor(Math.random() * choices.length);

  return choices[choice];
}

function playRound(ps, cs) {
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
