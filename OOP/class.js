/* ES-6 Class -> Syntatic Sugar over Constructor Function */
/* A class may only have one constructor */

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.salery = undefined;
  }
  name(){
    console.log(this.name);
  }
  details(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} year old`);
  }
  static cat = 101;
  static get type(){
    console.log("Person Class");
  }
}

console.log(Person.cat);

class Student extends Person {
  constructor(name, age, rollNumber){
    super(name, age);
    this.rollNumber = rollNumber;
  }
  details(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} year old and My roll number is ${this.rollNumber}`);
  }
  static get type(){
    console.log("Student Class");
  }
}

const kunal = new Student("kunal", 20, 88);

Person.type;
Student.type;
console.log(kunal.name);
console.log(kunal.details());