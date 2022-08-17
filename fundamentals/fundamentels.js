// Type conversion

let inputYear = `2002.2022`;

console.log(typeof inputYear, inputYear);

// string to integer
inputYear = Number(inputYear);

console.log(typeof inputYear, inputYear * 2);

const str = `123^%$`;

console.log(typeof Number(str), Number(str));

// number to string

console.log(typeof String(18));

// Type coercion: automatically type conversion by javascript

console.log(`I'm ` + 20 + ` Year old`);

console.log(`10` - `5` + 1);

console.log(`12` * `2`);
console.log(`12` / `2`);

// 5 values that will become `false` when changed to Boolen
// are 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(``));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;

if (money) {
  console.log(`You have money = ${money}`);
} else {
  console.error(`You dont have money`);
}

let undef;

if (undef) {
  console.log(`undef has something`);
} else {
  console.error(`undef is not been initialize`);
}

// equality operator === or ==

const age = 18;

// strict i.e no implicit conversion
if (age === 18) {
  console.log(`Your greate`);
}
// loose i.e it do implicit conversion
if (age == `18`) {
  console.error(`Do not use == `);
}

//  const lottaryGussNumber = Number(prompt(`Choose any number (1 to 10)!`));

// if (lottaryGussNumber === 7) {
//   alert(`You have wan to price 😀`);
// } else {
//   alert(`You loose`);
// }

// switch statement

const day = `friday`;

switch (day) {
  case `monday`:
    console.log(`The Day is monday`);
    break;
  case `tuesday`:
    console.log(`The Day is tuesday`);
    break;
  case `wednsday`:
    console.log(`The Day is wensday`);
    break;
  case `thusday`:
    console.log(`The Day is thusday`);
    break;
  case `friday`:
    console.log(`The Day is Firday`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`The Weekend`);
    break;
  default:
    console.error(`This is default`);
    break;
}

// 
  //
