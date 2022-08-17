"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) {
  console.log("✅️ You can drive!")
}

const interface = `Audit`;

const private = 3;

*/

// Functions

function print(something) {
  console.log(something);
}

function sum(a, b) {
  return a + b;
}

function logger() {
  print(`This function`);
}

console.log(sum(10, 10), sum(9, 9), sum(100, 100));

const value = logger();
print(value);

print(Number(`99`));

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

print(calcAge1(2002));

// function decleration
giveError(`Before function decleration`);

function giveError(text) {
  console.error(text);
}

// function expression
const giveTwoError = function (error1, error2) {
  console.error(error1, error2);
};

giveTwoError(`First`, `Second`);

// Arrow Function or (lambda function is guess.)
//----------Parameter-----Return***Type---
const fun = (parameter) => 100 - parameter;
print(fun(10));

const wishYear = (year) => `Happy ${year} buddy!`;

print(wishYear(2002));
print(wishYear(2050));
print(wishYear(2101));

const lambda = (para, lines) => {
  print(`Block of ${para} code and ${lines} lines`);
  print(`Block of ${para} code and ${lines} lines`);
  print(`Block of ${para} code and ${lines} lines`);
  print(`Block of ${para} code and ${lines} lines`);
  print(`Block of ${para} code and ${lines} lines`);
};

lambda(100, 50);

function print2(first, second) {
  print(first);
  print(second);
}

print2(`first`, `second`);

// type 1
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

print(factorial(4));

// type 2

const factorial2 = function (n) {
  if (n == 0) return 1;
  return n * factorial2(n - 1);
};

print(factorial2(4));

// type 3
const factorial3 = (n) => {
  if (n == 0) return 1;
  return n * factorial3(n - 1);
};

print(factorial3(4));

// Arrays - Literal Notation
const list = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, 9, `ten`, 999];
print(list);

const list2 = new Array(5, 4, 3, 2, 1);
print(list2);

print(list[0]); // 1
print(list[4]); // 5
print(list.length);
print(list[list.length - 1]);

print(`-------------------------------------------------`);
let array = [`1`, `2`, `3`, `4`];
print(array);
array = [`Kunal`, `Singh`];
print(array);

print(`-------------------------------------------------`);

const a1 = [1, 2, 3, 4, 5];
const a2 = [a1, 6, 7];
print(a2);

print(`------------------Array--Methods-----------------------------`);
const arrayMethods = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, 9, `ten`, 999];
// 1. lenght
// 2. push
// 3. unshift -> to push at front
// 4. pop -> remove the last element (return removed element)
// 5. shift -> remove the first element (return removed element)
// 6. indexOf -> find the index of an element
// 7. includes -> check if element exists

arrayMethods.push(`Back`);
print(arrayMethods);

arrayMethods.unshift(`Front`);
print(arrayMethods);

arrayMethods.pop();
print(arrayMethods);

arrayMethods.shift();
print(arrayMethods);

print(arrayMethods.indexOf(`ten`));

print(arrayMethods.includes(999));

print("-----------Objects--------------");

const object = {
  firstName: `Kunal`,
  lastName: `Singh`,
  userName: `KunalSin9h`,
  age: 20,
  hobby: [`coding`, `movies`, `basketball`],

  sum: function () {
    print(this);
    return this.age + 100;
  },
};

object[`city`] = `Bhopal`;
object.state = `MP`;

print(object);

print(
  object.firstName + ` has ` + object.hobby.length +
    ` hobby and his best hobby is ` + object.hobby[0],
);

print("-----------Objects--Methods------------");

print(object[`sum`]());

print("-----------For--Loop------------");

for (let i = 0, j = 10; i < 10; i++) {
  print(`Hello ${j}`);
}

for (let i = 0, j = 10; i < j; i++, j--) {
  print(i + j);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0, j = arr.length; i < j; ++i) {
  print(arr[i]);
}

const arrays = [];
arrays[2] = 0;
print(arrays);

print(`-----------------------While Loop-------------------`);

const rollDice = (x, y) => Math.trunc(Math.random() * x) + y;

let dice = rollDice(6, 1);

while (dice !== 6) {
  dice = rollDice(6, 1);
  print(`Dice is currently ${dice}`);
  break;
}
