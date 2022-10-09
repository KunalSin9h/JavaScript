'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

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
cookie.style.position = 'fixed';
cookie.style.bottom = '0';
cookie.style.zIndex = '100';
header.after(cookie);

cookie.style.backgroundColor = '#37383d';
cookie.style.width = `100%`;

const cookieBtn = document.querySelector(`.cookie-btn`);

cookieBtn.addEventListener(`click`, () => {
  cookie.remove();
});

btnScrollTo.addEventListener('click', (e) => {
  // console.log(e.target.getBoundingClientRect());
  // console.log("X -> ", window.scrollX, "px");
  // console.log("Y -> ", window.scrollY, "px");
  // console.log("Page height : ", document.documentElement.clientHeight);
  // console.log("Page Width : ", document.documentElement.clientWidth);

  // Scrolling
  // const coordSection1 = section1.getBoundingClientRect();

  // window.scrollTo(coordSection1.x, coordSection1.y + window.scrollY);
  // window.scrollTo({
  //   left: coordSection1.x,
  //   top: coordSection1.y + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Smooth Scrolling on Navigation
/*
document.querySelectorAll('.nav__link').forEach(function(elem){
  elem.addEventListener('click', function(e){
    e.preventDefault();
    const sectionToScroll = elem.getAttribute('href').slice(1);
    const rect = document.getElementById(sectionToScroll).getBoundingClientRect();
    window.scrollTo({
      left: rect.x + window.scrollX,
      top: rect.y + window.scrollY,
      behavior: 'smooth',
    });
  });
});
*/

/* Event Delegation */
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  const sectionToScroll = e.target.getAttribute('href')?.slice(1);
  document.getElementById(sectionToScroll)?.scrollIntoView({behavior: 'smooth'});
});

// h1.onclick = () => console.log("click the H1");
// h1.onmouseenter = () => console.log("Hovering on H1");
// h1.onmouseleave = () => console.log("Leaving H1 :(");

// const fun = () =>  {
//   alert("He");
//   h1.removeEventListener('mouseenter', fun);
// };

// h1.addEventListener('mouseenter', fun);

// const randNum = () => Math.floor(Math.random() * 255) + 1;
// const randColor = () => `rgb(${randNum()}, ${randNum()}, ${randNum()})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randColor();
//   this.style.padding = '1rem';
//   this.style.borderRadius = '10px';

//   console.log("Link", e.target, e.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randColor();
//   this.style.padding = '1rem';
//   this.style.borderRadius = '10px';
//   console.log("All Link", e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randColor();
//   this.style.padding = '1rem';
//   this.style.borderRadius = '10px';
//   console.log("nav", e.target, e.currenttarget);
// });

// /* DOM Traversing */
// const h1 = document.querySelector('h1');
// // console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'green';


/* Tab Component */

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');

tabContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  document.querySelectorAll('.operations__content').forEach(doc => doc.classList.remove('operations__content--active'));

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

/* Navigation Fading Effect */
const nav = document.querySelector('.nav__links');

function fade(e) {
  if (e.target.classList.contains('nav__link')) {
    Array.from(nav.children).forEach(el => {
      if(e.target.parentElement !== el) {
        el.style.opacity = this;
      }
    });
    document.querySelector('.nav__logo').style.opacity = this;
  }
}

nav.addEventListener('mouseover', fade.bind(0.3));
nav.addEventListener('mouseout', fade.bind(1));

/* Sticky Navigation */

// const dist = section1.getBoundingClientRect().y;

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= dist) document.querySelector('.nav').classList.add('sticky');
//   else document.querySelector('.nav').classList.remove('sticky');
// });


/* Get the viewport dimensions */
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.clientWidth);


/* Intersection Observer API */
const head = document.querySelector('.header__title');
const navi = document.querySelector('.nav');

const observer1 = new IntersectionObserver((entry) => {
  if(entry[0].isIntersecting) navi.classList.remove('sticky');
  else navi.classList.add('sticky');
}, {
  root: null,
  threshold: 0,
  rootMargin: `-${window.getComputedStyle(navi).getPropertyValue('height')}`,
});

observer1.observe(head);


/* Section Revealing */

const allSections = document.querySelectorAll('.section');

const revealSec = (entry, observer) => {
  /* observer is here only to unobserve things */
  // console.log(observer); -> intersectionObserver
  // console.log(entry); -> intersectionObserverEntry
  const e = entry[0];
  if (!e.isIntersecting) return;

  e.target.classList.remove('section--hidden');
  observer.unobserve(e.target);
}

const observer2 = new IntersectionObserver(revealSec, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(sec => {
  sec.classList.add('section--hidden');
  observer2.observe(sec);
});

/* Lazy loading */

const allImg = document.querySelectorAll('img[data-src]');

function loadImg(entries, observer) {
  const e = entries[0];
  if (!e.isIntersecting) return;
  e.target.src = e.target.dataset.src;
  e.target.addEventListener('load', () => {
    e.target.classList.remove('lazy-img');
  })
  observer.unobserve(e.target);
}

const observer3 = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

allImg.forEach(img => observer3.observe(img));

/* Slider */
const slides = document.querySelectorAll('.slide');
const left = document.querySelector('.slider__btn--left');
const right = document.querySelector('.slider__btn--right');
const dots = document.querySelector('.dots');

let click = 0
let numberOfSlides = slides.length;

function createDots(x){
  for (let i = 0; i < x; ++i){
    const html = `<button class="dots__dot" data-slide="${i}"></button>`;
    dots.insertAdjacentHTML('beforeend', html);
  }
}

createDots(numberOfSlides);

function gotoSlide(cent) {
  slides.forEach((slide, pos) => {
    slide.style.transform = `translateX(${(pos - cent) * 100}%)`;
  });
  markDot(cent);
}

function markDot(x) {
  Array.from(dots.children).forEach((dot, i) => {
    if (i === x)
      dot.classList.add('dots__dot--active');
    else dot.classList.remove('dots__dot--active');
  })
}

gotoSlide(0);

function nextSlide(){
  click = (click + 1)%numberOfSlides;
  gotoSlide(click);
}

function prevSlide(){
  click = (click - 1 + numberOfSlides)%numberOfSlides;
  gotoSlide(click);
}

right.addEventListener('click', nextSlide);
left.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
})

dots.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    gotoSlide(+slide);
  }
});

/* General */

// document.addEventListener('DOMContentLoaded', (e)=>{
//   console.log("DOMContentLoaded");
//   console.log(e);
// });
//
//
// window.addEventListener('load', (e) => {
//   console.log(e);
// })
//
// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
