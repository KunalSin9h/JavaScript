'use strict';

const Person = function(firstName, age){
  this.firstName = firstName;
  this.age = age;
  this.from = "Constructor Function";
  this.sayHello = function(){
    console.log("Hello");
  };
}

const kunal = new Person("Kunal", 20);

console.log(kunal.sayHello());

/* What does new do ? */
/*
1. create a {} obj
2. in function this -> {}
3. {} linked to prototype1
4. function automatically return {}
*/