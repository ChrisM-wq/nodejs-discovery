const firstName = 'Chris';
const job = 'Software Engineer';
const birthYear = 2001;
const year = 2024;

// Problem
// const chris = 'I'm'

const chris = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(chris);

const betterChris = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(betterChris);

console.log(`Just a regular string...`);

console.log('String with \n\
  multiple \n\
  lines');

console.log(`String with
  multiple
  lines
`);