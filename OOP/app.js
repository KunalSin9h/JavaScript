'use strict';

const b = new User("Kunal Singh", "email@mail.com", "39849839");
b

/* ---------------CONSTRUCTOR-FUNCTION------------------------ */
function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

/* Instance Method */
User.prototype.showUser = function(){
  console.log(`---------${this.username}----------`);
  console.log(`----${this.email}----`);
};
/* Static Method */
User.dot = () => {
  console.log("Hely");
};


/* ------------- */
User.prototype.type = "normal";
User.prototype.country = "IN";
User.prototype.settings = {
  theme: "dark",
};
/* --------------------------------------------------------------- */

const a = new User("a", "a@a.a", "a");

a

console.log(User.prototype);
console.log(a.__proto__);
console.log(a instanceof User);
console.log(User.prototype.isPrototypeOf(a));
console.log(User.prototype.isPrototypeOf(User));
console.log(a.country);

// console.log(a.__proto__.__proto__.__proto__)

// console.dir(User.prototype.constructor);


/* build-in constructors function */
// const arr = new Array(1, 2, 3, 4, 5);
// console.log(Array.prototype);

User.dot();

/* Inheritance using Constructor Function */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.name = function(){
  console.log(this.name);
}

Person.prototype.details = function(){
  console.log(`${this.name} is ${this.age} year old`);
}

function Student(name, age, rollNumber){
  Person.call(this, name, age);
  this.rollNumber = rollNumber;
}

Student.prototype.__proto__ = Person.prototype;
// Student.prototype = Object.create(Person.prototype);

Student.prototype.details = function(){
  console.log(`${this.name} is ${this.age} year old and my Roll-Number is ${this.rollNumber}`);
}

console.dir(Student.prototype.constructor);