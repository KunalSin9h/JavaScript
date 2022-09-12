'use strict';

function f(...v){
  console.log(...v);
}


/* Default Parameters using (=) */

const allBookings = [];

const createBooking = function(flightNum, numPassengers, price) {

  // Set default parameters the old way
  flightNum ||= `Unknown`;
  numPassengers ||= 100;
  price ||= `$100`;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  // f(booking);
  allBookings.push(booking);
}

createBooking(`A560`, undefined, 0);

/* Passing Arguments: Value and Reference */

const flight = `B404`;
const kunal = {
  name: `Kunal Singh`,
  passport: 348938498,
};
//                       Primitive  Referenced Typed
const checkIn = function(flightNum, passenger){
  flightNum = `A130`;
  passenger.name = `Mr. ${passenger.name}`; 
  f(flightNum, passenger);
}

checkIn(flight, Object.assign({}, kunal));


/* Higher Order Functions */

function asole(){
  f("I am a");
}

function b(asole){
  asole();
  f("I am b");
}

f(asole.name);
f(b.name);
f(asole);
f(b);

const namer = prefix => name => console.log(`${prefix} ${name}`);

namer(`Mr.`)(`Kunal`);

function helloWorld(){
  return function(){
    return function(){
      return function(){
        console.log("Hello World");
      }
    }
  }
}

helloWorld()()()();

/* Function Methonds  */

/* 1. call */

function saveData(data){
  this.savedData.push(
    {
      data,
      id: Date.now(),
      year: new Date().getFullYear(),
    }
  );
}

const personal = {
  name: `Personal`,
  savedData: [],
};

const social = {
  name: `Social`,
  savedData: [],
};

const temp = {
  name: `Temp`,
  savedData: [],
};

saveData.call(personal, `ABEDE890yu`);

saveData.call(social, `R15`);
console.log(social);

/* 2. Apply */
saveData.apply(temp, [`T150`]);
console.log(temp);


/* 3. Bind */

/* Bind is call but it does't call the function imigetaly */

const personalSaveData = saveData.bind(personal, `TUTU`);

personalSaveData();
personalSaveData();
personalSaveData();
personalSaveData();

console.log(personal);

const addTax = (rate, value) => value + value * rate;

const addCGST = addTax.bind(null, 0.18);
const addSGST = addTax.bind(null, 0.18);

console.log(`Final Price: ` + (addCGST(1) + addSGST(1)));

/* IIFE */
/* if need a function to be called only once then... */

(function(a, b){
  console.log("Once: ", a + b);
})(1, 9);

(

  function(){
    console.log("Hello IIFE");
  }

)();

/* Closures */

function family(){
  let a = 10, b = 10, c = 10, d = 10;
  return function(){
    a++;
    b++;
    c++;
    d++;
    console.log({a, b, c, d});
  }
}

const innerFun = family();
console.dir(innerFun);

let f;

const g = function(){
  const a = 10;
  f = function(){
    console.log(a * 69);
  };
};

g();
