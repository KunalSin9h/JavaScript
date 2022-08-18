"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, () => {
  const inputValue = Number(document.querySelector(`.guess`).value);

  if (inputValue === 0) {
    document.querySelector(`.message`).textContent =
      `⛔️ No number or 0 entered!`;
  } else if (inputValue > 20 || inputValue <= 0) {
    document.querySelector(`.message`).textContent =
      `🚫 Number should between 1 and 20`;
  } else {
    if (inputValue === randomNumber) {
      document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
      document.querySelector(`.number`).textContent = randomNumber;
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      document.querySelector(`.number`).style.width = `30rem`;

      if(score > highscore) {
        highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;
      }
      
    } else {
      if (score > 0) {
        document.querySelector(`.message`).textContent = inputValue > randomNumber ? ` 📈️ Too High!` : `📉️ Too Low!`;
        score--;
      } else {
        document.querySelector(`.message`).textContent = `🧿 You lost the game`;
        score = 0;
      }
    }
  }
  document.querySelector(`.score`).textContent = score;
});

document.querySelector(`.again`).addEventListener(`click`, () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`; 
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.message`).textContent = `Start guessing...`; 
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
})
