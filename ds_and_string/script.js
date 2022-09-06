`use strict`;

// hello
const restaurant = {
  // hello
  name: `the alasktustros`, 
  reslocation: `11 hights, bhopal, india`,
  categories: [`italian`, `pizzeria`, `vegatarian`, `organic`],
  startermenu: [`focaccia`, `brushchetta`, `garlic bread`, `caprese salad`],
  mainmenu: [`pizza`, `pasta`, `risotto`],
  order: function(starterindex, mainindex) {
    return [this.startermenu[starterindex], this.mainmenu[mainindex]]; 
  },
  openinghours: {
    thu: {
      open: 12, 
      close: 22,
    },
    fri: {
      open: 11, 
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

/* array destructuring */

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , ,secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

let a = 69;
let b = 420;
console.log(a, b);
[a, b] = [b, a]
console.log(a, b);

const [one, two] = restaurant.order(2, 1);
console.log(one, two);

const nest = [1, 2, 3, [4, 5]];

const [i, , , [j, k]] = nest;

console.log(i, j, k);

const arr2 = [1, 2, 3, [4, 5]];

const [p, , q, [, r]] = arr2;
console.log(p, q, r);

/* object destructuring */

const {name: newname = "cv", reslocation: newloc} = restaurant;
console.log(newname, newloc);

const {openinghours : {thu: {open: rpm, close: co}}} = restaurant;
console.log(rpm, co);

/* spread operator */
  
const list = [1, 2, 3, 4];
console.log(5, 6, ...list);

const str = `kunal`;
console.log(str);
const carray = [...str, `s`];
console.log(...carray);

const firstname = `kunal`;
const lastname = `singh`;

console.log(...firstname, ...lastname);

const newobject = {...restaurant, verified: true};
console.log(newobject);


/* rest operator */

const print = function(a, ...all) { // rest
    console.log(...all); // spread
    console.log(a); 
}

print("kunal", 20, "cool", 69, 420);

/* short circuiting */
console.log(`singh` || `kunal`);

console.log(0 || 0 || null || undefined || `` || 0 || 0);

/* nullis coalescing operator */

const maybenullval = ``;
console.log(maybenullval ?? 10);

/* logical assignment operator */
const rest1 = {
  name: "rest1",
  numguest: 20,
}

const rest2 = {
  name: "rest2",
  owner: "kunal",
  numguest:  0,
}

rest1.numguest = rest1.numguest || 10;
console.log(rest1.numguest);

rest2.numguest ??= 10;
console.log(rest2.numguest);

rest2.owner &&= "anonymous";
console.log(rest2);

/* ranged based for loop in arrays */

const arrayof = [1, 2, 3, 4, 5, `hello`, null];

for (const item of arrayof) {
  console.log(item);
}
/* 
for (const item of arrayof) {
  console.log(arrayof.indexof(item));
} */

for (const [ind, item] of arrayof.entries()) {
  console.log(`${ind + 1}: ${item}`);
}

console.log([...arrayof.entries()]);


/* enhanced object literal es-6 */
/* object listeral : when object is hard coded, i.e all key and keys
 * */

/* 1. when x: x happens*/

const dog = {
  name: "ether",
  age: 10,
  breed: {
    breedName: "Husky",
    breedType: "German Shepard",
  } 
};

const add = (a, b) => {
  return a + b;
};
let ethereum_wallet_address = `0x8998d9fdkj934kjd90j54009849jdkfjkdj9`;
let bitcoin_wallet_addrss = `bc0129jijd389438f9384jd3948dhjfkd`;

const animal = {
  liveIn: "Earth",
  // dog, // if dog: dog -> dog can work
  calcAge(){ // 2. no need to write `function` keeword
    console.log("Hello");
  },
  [add(10, 10)]: 20, // 3. Can compute key name.
  
  ethereum_wallet_address,
  bitcoin_wallet_addrss,

  uniSwap(passward) { 
    if(passward === 112)
      [ethereum_wallet_address, bitcoin_wallet_addrss] = 
        [bitcoin_wallet_addrss, ethereum_wallet_address];
  }, 
};

console.log(animal);

/* Optional Channing (?.) */
console.log(animal.dog?.breed?.breedType); // Breed does`t exist
animal.dog?.breed && console.log(animal.dog.breed.breedType);

console.log(ethereum_wallet_address, bitcoin_wallet_addrss);
animal.uniSwap?.(112);
console.log(ethereum_wallet_address, bitcoin_wallet_addrss);


/* Looping over Objects */
const obj = {
  one: 1,
  two: 2,
  three: 3,
  fore: 4,
  five: 5,
  six: 6,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} => ${value}`);
}

/* SETS - DATA STRUCTURE */

const orderSet = new Set([1, 2, 4, 3, 3, 4]);
console.log(orderSet.size);

console.log(orderSet.has(3));
console.log(orderSet.has(9));

orderSet.add(40);
orderSet.delete(1);
orderSet.clear();

console.log(orderSet);

// Sets are also iterable 
const newSet = new Set([1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7]);

for (const item of newSet){
  console.log(item);
}

//  Example
const arrayStaff = [`W`, `C`, `M`, `W`, `C`];
const staffSet = new Set(arrayStaff);
const newStaff = [...staffSet];
console.log(newStaff);

console.log(new Set(`KunalSingh`).size);


/* MAP - DATA STRUCTURE */

const ab = new Map();

ab.set(`name`, `kunal`);
ab.set(`name`, `kunalsin9h`);
ab.set(`age`, 20);
console.log(ab.get(`name`));
console.log(ab.size);

console.log(ab.has(`categories`));

ab.delete(`age`);

ab.set([1, 2, 3], 6);

const arrayForMap = [1, 2];
ab.set(arrayForMap, true);

console.log(ab);

console.log(ab.get(arrayForMap));

/* Map new Way of making */

const newMap = new Map([
  [1, `one`],
  [2, `two`],
  [3, `three`],
  [
    `letters`, 
    [`A`, `B`, `C`]
  ]
]);

console.log(newMap);

for(const [key, value] of ab){
  console.log(key, value);
}

console.log(...newMap);

const newMapKeys = [...newMap.keys()];
const newMapValues = [...newMap.values()];

console.log(newMapKeys);
console.log(newMapValues);

console.log(`-------------------------------------------------`);

const aa = new Map();
aa.set(`name`, `kunal`);
aa.set(`age`, 20);

const bb = new Map(aa.entries());
console.log(bb);

/* const Tew = new WeakSet([1, 2, 1, 2, 3]);
console.log(Tew); */

console.log(`---------------------STRINGS-----------------------`);

function f(...vals) {
  console.log(...vals);
}

const airline = `Tesseract Airline`;
const plane = `T-50 RT120`;

f(plane[0], plane[1]);

f(Number(`KunalSin9h`[8]));

f(airline.length);
f(plane.length);

f(airline.indexOf(`e`));
f(airline.lastIndexOf(`e`));

// Slicing

f(plane.slice(5, 8), plane[8]);

// Q: Extract the string between first e and last e;

f(airline.slice(airline.indexOf(`e`), airline.lastIndexOf(`e`)));

const strr = `kunalsin9h`;
f(strr.slice(-2));

f(airline.toLowerCase());
f(airline.toUpperCase());

let userName = `kUnaLsin9h`;
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
f(userName);

const email = `hello@kunalsin9h.dev`;
let loginEmail = `  HeLLO@KunaLSiNH.DeV      `;

loginEmail = loginEmail.toLowerCase().trimEnd();

f(loginEmail);

const announcement = `Ethereum Merger is going!, going Ethereum`;
f(announcement.replaceAll(`going`, `comming`));
f(announcement.replace(/Ethereum/g, `ETH`));

const password = `0xKunalSingh`;
f(password.includes(`0x`));
f(password.includes(`9`));


f(password.startsWith(`0x`));
f(password.endsWith(`9h`));

f(`Kunal Singh`.split(` `));

const ame = `Kunal Singh`;
const [firstName, lastName] = ame.split(` `);

// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
const newName = [1, 2, 3, 4].join(`-`);
f(newName);

function captilizeName(name){
  const nameArray = name.split(` `);
  for(let i = 0, j = nameArray.length; i < j; ++i){
    nameArray[i] = nameArray[i].replace(nameArray[i][0], nameArray[i][0].toUpperCase());
  }
  return nameArray.join(` `);
}

f(captilizeName(`kunal singh is king`));

const maskCreditCard = function(cardNumber){
  cardNumber = String(cardNumber);
  f(''.padStart(cardNumber.length - 4, '*') + cardNumber.slice(-4));
}

maskCreditCard(1234123412341234)

f(`Hola -> `.repeat(10));
