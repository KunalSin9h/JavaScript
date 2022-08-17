const age = 10;

if(age >= 18) {
  console.log(`You are allowed to Vote!`);
} else {
  const ageNeed = 18 - age;  
  console.log(`Your are not allowed to vote, you need ${ageNeed} more years`);
}


const birthYear = 2002;

let century;

if(birthYear <= 2000) {
  century = 20; 
} else {
  century = 21;
}

console.log(century);
