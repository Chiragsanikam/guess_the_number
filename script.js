"use strict";

// document.querySelector('.message').textContent = 'bruh';
// document.querySelector('.number').textContent = 'hi';
// document.querySelector('.score ').textContent = 30;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let initialScore = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "type a number!";
  } else if (guess === secretNumber) {
    console.log(
      (document.querySelector(".message").textContent = "right number!!!")
    );
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "28rem";
    initialScore++;
    document.querySelector(".score").textContent = initialScore;
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (initialScore > 1) {
      console.log(
        (document.querySelector(".message").textContent = "too high!!")
      );
      initialScore--;
      document.querySelector(".score").textContent = initialScore;
      document.querySelector("body").style.backgroundColor = "#222";
    } else {
      document.querySelector(".message").textContent = "you lost the game :(";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (initialScore > 1) {
      console.log(
        (document.querySelector(".message").textContent = "too low!!")
      );
      initialScore--;
      document.querySelector(".score").textContent = initialScore;
      document.querySelector("body").style.backgroundColor = "#222";
    } else {
      document.querySelector(".message").textContent = "you lost the game :(";
      document.querySelector(".score").textContent = 0;
    }
  }
});
