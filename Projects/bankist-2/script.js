'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector(`.header`);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const  cookie = document.createElement('div');
cookie.classList.add('cookie-message');
cookie.innerHTML = `<p>We use cookies on this site to improve you experience</p><button class="btn cookie-btn">Got it</button>`;

header.append(cookie);

cookie.style.backgroundColor = '#37383d';
cookie.style.width = `120%`;

const cookieBtn = document.querySelector(`.cookie-btn`);

cookieBtn.addEventListener(`click`, () => {
  cookie.remove();
});

const s = document.querySelector(`.nav__logo`);
console.log(s.alt);
console.log(s.src);
console.log(s.className);

/* non standard */
console.log(s.getAttribute('coder'));
