'use strict';

/* User Data */
const account1 = {
  username: `kk`,
  fullName: `Kunal Singh`,
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  username: `rc`,
  fullName: `Rahul Chadda`,
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  username: `boy`,
  fullName: `Boy Boy`,
  movements: [100, 100, -50, -50],
  interestRate: 1,
  pin: 1,
};

const accounts = [account1, account2, account3];

/* Elements */
const welcome = document.querySelector(`.welcome`),
  loginUser = document.querySelector(`.login__input--user`),
  loginPin = document.querySelector(`.login__input--pin`),
  loginBtn = document.querySelector(`.login_btn`),
  main = document.querySelector(`.app`),
  totalBalance = document.querySelector(`.balance__value`),
  In = document.querySelector(`.summary__value--in`),
  Out = document.querySelector(`.summary__value--out`),
  Interest = document.querySelector(`.summary__value--interest`),
  movementsBox = document.querySelector(`.movements`),
  dateLabel = document.querySelector(`.date`),
  transferTo = document.querySelector(`.form__input--to`),
  transferAmount = document.querySelector(`.form__input--amount`),
  transferSend = document.querySelector(`.form__btn--transfer`),
  closeUser = document.querySelector(`.form__input--user`),
  closePin = document.querySelector(`.form__input--pin`),
  closeBtn = document.querySelector(`.form__btn--close`),
  loanAmount = document.querySelector(`.form__input--loan-amount`),
  loanBtn = document.querySelector(`.form__btn--loan`),
  sortBtn = document.querySelector(`.btn--sort`);

let currentUser = null;

loginBtn.addEventListener(`click`, (e) => {
  /*
  Button in form will behaves like submit so it will reload the page
  to prevent this default befanior we user event.preventDefault() method
   */
  // e.preventDefault();
  loginIn();
});

document.addEventListener(`keypress`, (e) => {
  if (loginUser.value !== `` && loginPin.value !== `` && e.key === `Enter`) loginIn();
});

transferSend.addEventListener(`click`, () => {
  const receiver = transferTo.value,
    amount = Number(transferAmount.value);
  const userBalance = calcBalance(currentUser);

  if (userBalance >= amount && userBalance !== 0) {
    currentUser.movements.push(amount * -1);
    accounts.find(usr => usr.username === receiver).movements.push(amount);
  }
  transferTo.value = transferAmount.value = ``;
  updateUI(currentUser);
});

closeBtn.addEventListener(`click`, hideMain);

loanBtn.addEventListener(`click`, () => {
  const amount = Number(loanAmount.value);
  if (currentUser.movements.some(depo => depo >= amount * 0.1)) {
    currentUser.movements.push(amount);
    updateUI(currentUser);
    loanAmount.value = ``;
  }
});

sortBtn.addEventListener(`click`, () => {
  currentUser.movements.sort((a, b) => a - b);
  updateUI(currentUser);
});

function loginIn() {
  const user = loginUser.value,
    pin = Number(loginPin.value);

  currentUser = accounts.find(regUser => regUser.username === user && regUser.pin === pin);

  currentUser && showMain(currentUser);

}

function showMain(user) {
  loginUser.value = loginPin.value = ``;
  loginPin.blur(); /* loose focus from input field */
  const firstName = user.fullName.split(` `)[0];
  welcome.textContent = `Hello, ${firstName}!`
  dateLabel.textContent = date();
  updateUI(user);
  showUI();
}

function hideMain() {
  const user = closeUser.value,
    pin = Number(closePin.value);

  if (currentUser.username === user && currentUser.pin === pin) {
    hideUI();
    welcome.textContent = `Log in to get started`;
    accounts.splice(accounts.indexOf(currentUser), 1);
  }
}

function loadMovements(movements) {
  movements.forEach((mov, i) => {

    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${date()}</div>
          <div class="movements__value">₹ ${mov}</div>
      </div>`;

    movementsBox.insertAdjacentHTML(`afterbegin`, html);

  });
}

function updateUI(user) {
  movementsBox.innerHTML = ``;
  totalBalance.textContent = `₹ ${calcBalance(user)}`;
  In.textContent = `₹ ${calcIn(user)}`;
  Out.textContent = `₹ ${calcOut(user)}`;
  Interest.textContent = `₹ ${calcInterest(user)}`;
  loadMovements(user.movements);
}

function showUI() {
  main.style.opacity = `1`;
}

function hideUI() {
  main.style.opacity = `0`;
}

function calcBalance(user) {
  return user.movements.reduce((acc, bal) => {
    return acc + bal;
  }, 0);
}

function calcIn(user) {
  return user.movements.filter(el => el > 0).reduce((acc, curr) => acc + curr, 0);
}

function calcOut(user) {
  return user.movements.filter(el => el < 0).map(el => Math.abs(el)).reduce((acc, curr) => acc + curr, 0);
}

function calcInterest(user) {
  return user.movements.filter(el => el > 0).map(el => el * user.interestRate / 100).filter(el => el >= 1).reduce((acc, curr) => acc + curr, 0);
}

function date() {
  const dd = new Date().getDate(),
    mm = new Date().getMonth(),
    yy = new Date().getFullYear(),
    date = `${dd}/${mm}/${yy}`;
  return date;
}