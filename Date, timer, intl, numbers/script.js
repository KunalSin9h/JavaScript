'use strict';

function f(...v){
  console.log(...v);
}

const strnub = `67`;
f(+strnub);

f(Number.parseInt(`30px`));
f(Number.parseInt(`40px50`));
f(Number.parseInt(`e60`));
f(Number.parseInt(`111111`, 9));

f(Number.parseFloat(`2.59rem`));

// Check if something is integer 
f(Number.isInteger(20));
f(Number.isInteger(`20`));
f(Number.isInteger(`20E`));
f(Number.isInteger(20 / 0));
f("---")
f(Number.isInteger(34.0));
f("---")

// Check if something is integer including floating point
f(Number.isFinite(20));
f(Number.isFinite(20.2));

/* Math */
f(Math.sqrt(99));
f(99**(1/2));
f(Math.cbrt(99));
f(99**(1/3));

f(Math.max(100, 20, 1000, 3));
f(Math.max(100, `2`));
f(Math.min(3, 4, 3, -1,4));

f(Math.PI);
f(Math.E);
f(Math.LN2);

f(Math.trunc(1398498.938498));

/* Math.random */
f("----------")

function rand(x, y){
  // Random number between x and y inclusive
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

f(Math.trunc(Math.random() * 100) + 1);
/* while(true){
  f(rand(10, 20));
} */

/* Rounding Ints */
f(Math.round(24.4));
f(Math.round(24.6));

f(Math.round(-1.6));
f(Math.trunc(-1.6));

/* while(true){
  f(rand(-20, -10));
} */

f((1.234567).toFixed(3));
const i = 10;
f(i.toFixed(2));

const vv = 10_000_000;
f(vv);

f(2**53 - 1);
f(2**53);
f(2**53 + 1);
f(Number.MAX_SAFE_INTEGER);

const big = 11111111111111111111111111111111111111111n;
f(typeof big);
f(big + " is really big number");


const biga = 100000n;
const norm = 2;
f(biga + "norm");


/* DATES */
f("----------------------------DATE--------------------------------")
const now = new Date();
f(now);

const unix = new Date(0);
f(unix);

/* Date object's methods */

const future = new Date();
f(future.getFullYear());
f(future.getMonth()); // 0 - based
f(future.getDate());
f(future.getDay()); // 0 -based
f(future.getHours());
f(future.getMinutes());
f(future.getSeconds());

f(future.toString());
f(future.toISOString());
f(future.toUTCString());

f(future.getTime(2002))
f(Date.now());

/* Date operations */
f("--------------")
const a = new Date(2037, 10, 19, 15, 25);
const b = new Date();

const diff = a - b; // Subtracting two date objects will give time diff in milliseconds
f(new Date(diff));

/* Intl */
/* JavaScript Internationalization API */

const num = 10000000000000;
const us = new Intl.NumberFormat('en-US').format(num);
f(us);

/* Timer */

const timer = setTimeout((a, b, c) => {
  console.log(a + b + c)
}, 5000, 1, 2, 3);

setInterval((a, b) => console.log(a + b), 1000, 80 , 20)
