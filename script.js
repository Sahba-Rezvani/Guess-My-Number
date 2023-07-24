"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

// document.querySelector(".number").textContent = secretNumber;
function checkGuess() {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    //When there is no input
    if (!guess) {
      displayMessage("⭕No number!!!");

      //When player wins
    } else if (secretNumber === guess) {
      displayMessage("✨Correct Number");

      document.querySelector("body").style.backgroundColor = "#60b347";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

    } else if(secretNumber !== guess ){
        displayMessage( guess > secretNumber ?"⏫ Too High!" : "📉 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
    }
    //When player looses
  } else {
    score--;
    document.querySelector(".score").textContent = score;
    displayMessage("You lost the game!");
  }
}

document.querySelector(".again").addEventListener("click", playAgain);

function playAgain() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
document.querySelector(".number").textContent = '?';

  document.querySelector("body").style.backgroundColor = "#222222";
}

document.querySelector(".check").addEventListener("click", checkGuess);
