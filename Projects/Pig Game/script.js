'use strict';

const player1 = document.querySelector(`.player-1`);
const player2 = document.querySelector(`.player-2`);
const player1Score = document.querySelector(`#score-1`);
const player2Score = document.querySelector(`#score-2`);
const player1CurrentScore = document.querySelector(`#current-score-1`);
const player2CurrentScore = document.querySelector(`#current-score-2`);
const dice = document.querySelector(`.dice`)

// Buttons
const newGameBtn = document.querySelector(`#new`);
const rollBtn = document.querySelector(`#roll`);
const holdBtn = document.querySelector(`#hold`);

function rollDice() {
    return Math.trunc(Math.random() * 6) + 1;
}

function switchPlayer() {
    if (player1.classList.contains(`player-active`)) {
        player1.classList.remove(`player-active`);
        player2.classList.add(`player-active`);
    } else {
        player1.classList.add(`player-active`);
        player2.classList.remove(`player-active`);
    }
}

function currentPlayer() {
    if (player1.classList.contains(`player-active`)) return player1;
    else return player2;
}

function disableBtn() {
    rollBtn.disabled = true;
    holdBtn.disabled = true;
}

function anableBtn() {
    rollBtn.disabled = false;
    holdBtn.disabled = false;
}

rollBtn.addEventListener(`click`, () => {
    const numberOnDice = rollDice();
    // updating dice image
    dice.src = `./dice-${numberOnDice}.png`;
    dice.style.visibility = `visible`;
    if (currentPlayer() === player1) {
        if (numberOnDice === 1) {
            player1CurrentScore.textContent = 0;
            switchPlayer();
        } else {
            player1CurrentScore.textContent = Number(player1CurrentScore.textContent) + numberOnDice;
        }
    } else {
        if (numberOnDice === 1) {
            player2CurrentScore.textContent = 0;
            switchPlayer();
        } else {
            player2CurrentScore.textContent = Number(player2CurrentScore.textContent) + numberOnDice;
        }
    }
})

holdBtn.addEventListener(`click`, () => {
    if (currentPlayer() === player1) {
        player1Score.textContent = Number(player1Score.textContent) + Number(player1CurrentScore.textContent);
        player1CurrentScore.textContent = 0;
        if (Number(player1Score.textContent) >= 100) {
            player1.classList.add(`player-winner`);
            disableBtn();
        }
    } else {
        player2Score.textContent = Number(player2Score.textContent) + Number(player2CurrentScore.textContent);
        player2CurrentScore.textContent = 0;
        if (Number(player2Score.textContent) >= 100) {
            player2.classList.add(`player-winner`);
            disableBtn();
        }
    }
    switchPlayer();
})

newGameBtn.addEventListener(`click`, () => {
    dice.style.visibility = `hidden`;
    player1.classList.remove(`player-winner`);
    player2.classList.remove(`player-winner`);
    player1.classList.add(`player-active`);
    player2.classList.remove(`player-active`);
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1CurrentScore.textContent = 0;
    player2CurrentScore.textContent = 0;
    anableBtn();
})