const now = 2024;
const ageChris = now - 2001;
const ageHappy = now - 1988;
console.log(ageChris);

console.log(ageChris * 2, ageChris / 10, 2 ** 3);
// 2 ** 3 === 2 to power of 3, 2 * 2 * 2

const firstName = 'Chris';
const lastName = 'Happy';
console.log(firstName + ' ' + lastName);

console.log(typeof firstName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1 = 51
x--; // x = x - 1 = 50
x--; // x = x - 1 = 49
console.log(x);

// Comparison operators
console.log(ageChris > ageHappy); // >, <, >=, <=
console.log(ageChris >= 23);

const isOldEnough = ageChris >= 23;

// Precedence of - over >
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let xyz, abc;
xyz = abc = 25 - 10 - 5; // x = y = 10, x = 10

console.log(xyz, abc);

const averageAge = ageChris - ageHappy / 2;
console.log(ageChris, ageHappy, averageAge);