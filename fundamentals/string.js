const firstName = "Kunal";
const course = "Computer Science and Engineering";

const kunal = "I'm " + firstName + ", I am a " + course + " student!";

console.log(kunal);

// using template literal 
const kunalNew = `I'm ${firstName}, I am a ${course} student!`;
console.log(kunalNew);

const backTickUseForEveryStringIsBetterChoise = `kunal is "'";" kjd'" hala" i'a `;

console.log(backTickUseForEveryStringIsBetterChoise);

// backTick for multiline string

const multilineString = `Hello this is 
multiline string
powerted by backtick 
see yaa`;

console.log(multilineString);
