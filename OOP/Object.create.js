const Person = {
    calcAge(){
        console.log(2050 - this.age);
    },
};

const kunal = Object.create(Person);
kunal.fullName = "Kunal Singh";
kunal.age = 20;

const Prototype = {
    disc: "This is General Prototype",
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    mul(a, b){
        return a * b;
    },
};

const object = Object.create(Prototype);
object.name = "object";
object.fun = function (){
  console.log("object's own function");
};

