'use strict';

const locale = navigator.language

/* User Data */
const account1 = {
  username: `kk`,
  fullName: `Kunal Singh`,
  movements: [1],
  movementsDate: [`1970-01-01T00:00:00.000Z`],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  username: `rc`,
  fullName: `Rahul Chadda`,
  movements: [1],
  movementsDate: [`1970-01-01T00:00:00.000Z`],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  username: `boy`,
  fullName: `Boy Boy`,
  movements: [1],
  movementsDate: [`1970-01-01T00:00:00.000Z`],
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
  sortBtn = document.querySelector(`.btn--sort`),
  timerCount = document.querySelector(`.timer`);

let currentUser = null;

loginBtn.addEventListener(`click`, (e) => {
  /*
  Button in form will behaves like submit so it will reload the page
  to prevent this default befanior we user event.preventDefault() method
   */
  // e.preventDefault();
  stopLogOutTimer();
  loginIn();
});

document.addEventListener(`keypress`, (e) => {
  if (loginUser.value !== `` && loginPin.value !== `` && e.key === `Enter`) loginIn();
});

transferSend.addEventListener(`click`, () => {
  const receiver = transferTo.value,
    amount = +transferAmount.value;
  const userBalance = calcBalance(currentUser);

  if (userBalance >= amount && userBalance !== 0) {
    currentUser.movements.push(amount * -1);
    currentUser.movementsDate.push(new Date().toISOString());
    const acc = accounts.find(usr => usr.username === receiver);
    acc.movements.push(amount);
    acc.movementsDate.push(new Date().toISOString());
  }
  transferTo.value = transferAmount.value = ``;
  updateUI(currentUser);
});

closeBtn.addEventListener(`click`, hideMain);

loanBtn.addEventListener(`click`, () => {
  const amount = Math.floor(loanAmount.value);
  if (currentUser.movements.some(depo => depo >= amount * 0.1)) {
    currentUser.movements.push(amount);
    currentUser.movementsDate.push(new Date().toISOString());
    updateUI(currentUser);
    loanAmount.value = ``;
  }
  loanAmount.value = ``;
  stopLogOutTimer();
});

sortBtn.addEventListener(`click`, () => {
  currentUser.movements.sort((a, b) => a - b);
  updateUI(currentUser);
});

function loginIn() {
  const user = loginUser.value,
    pin = +loginPin.value;

  startLogOutTimer();
  currentUser = accounts.find(regUser => regUser.username === user && regUser.pin === pin);

  currentUser && showMain(currentUser);
}

function logOut() {
  hideUI();
  stopLogOutTimer();
  welcome.textContent = `Log in to get started`;
}

let timer;

function stopLogOutTimer(){
  clearInterval(timer);
}

function startLogOutTimer() {
  let time = 5*60;

  const timerFunction = () => {
    const min = Math.trunc(time / 60);
    const sec = time % 60;
    timerCount.textContent = `${String(min).padStart(2, 0)}:${String(sec).padStart(2, 0)}`
    if (time === 0) {
      logOut();
    }
    time--;
  }
  timerFunction();
  timer = setInterval(timerFunction, 1000);
}

function showMain(user) {
  loginUser.value = loginPin.value = ``;
  loginPin.blur(); /* loose focus from input field */
  const firstName = user.fullName.split(` `)[0];
  welcome.textContent = `Hello, ${firstName}!`
  dateLabel.textContent = displayDate();
  updateUI(user);
  showUI();
}

function hideMain() {
  const user = closeUser.value,
    pin = +closePin.value;

  if (currentUser.username === user && currentUser.pin === pin) {
    hideUI();
    welcome.textContent = `Log in to get started`;
    accounts.splice(accounts.indexOf(currentUser), 1);
  }
}

function loadMovements(movements, movementsDate) {
  movements.forEach((mov, i) => {
    const date = new Date(movementsDate[i]);
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate(date)}</div>
          <div class="movements__value">₹ ${mov.toFixed(2)}</div>
      </div>`;

    movementsBox.insertAdjacentHTML(`afterbegin`, html);

  });
}

function updateUI(user) {
  movementsBox.innerHTML = ``;
  totalBalance.textContent = calcBalance(user);
  In.textContent = calcIn(user);
  Out.textContent = calcOut(user);
  Interest.textContent = calcInterest(user);
  loadMovements(user.movements, user.movementsDate);
}

function showUI() {
  main.style.opacity = `1`;
}

function hideUI() {
  main.style.opacity = `0`;
}

const options = {
  style: 'currency',
  currency: 'INR',
};

function calcBalance(user) {
  const bal = user.movements.reduce((acc, bal) => {
    return acc + bal;
  }, 0);
  return new Intl.NumberFormat(locale, options).format(bal.toFixed(2));
}

function calcIn(user) {
  const bal =  user.movements.filter(el => el > 0).reduce((acc, curr) => acc + curr, 0);
  return new Intl.NumberFormat(locale, options).format(bal.toFixed(2));
}

function calcOut(user) {
  const bal = user.movements.filter(el => el < 0).map(el => Math.abs(el)).reduce((acc, curr) => acc + curr, 0);
  return new Intl.NumberFormat(locale, options).format(bal.toFixed(2));
}

function calcInterest(user) {
  const bal =  user.movements.filter(el => el > 0).map(el => el * user.interestRate / 100).filter(el => el >= 1).reduce((acc, curr) => acc + curr, 0);
  return new Intl.NumberFormat(locale, options).format(bal.toFixed(2));
}

function displayDate(dateString = Date.now()) {
  const now = new Date(dateString),
        day = `${now.getDate()}`.padStart(2, '0'),
        month = `${now.getMonth() + 1}`.padStart(2, '0'),
        year = now.getFullYear(),
        hour = `${now.getHours()}`.padStart(2, '0'),
        min = `${now.getMinutes()}`.padStart(2, '0');

  return `${day}/${month}/${year}, ${hour}:${min}`
}