'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);
const btnCloseModal = document.querySelector(`.close-modal`);

function closeModal() {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}

function openModal() {
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
}

for (let i = 0, j = btnsShowModal.length; i < j; ++i) {
    btnsShowModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// Global event
// `e` or what every then name it can be is event object: javascript create an event object.
document.addEventListener(`keydown`, (e) => {
    if (e.key === `Escape` && !modal.classList.contains(`hidden`)) closeModal();
});