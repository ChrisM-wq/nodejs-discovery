// Type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Chris'));
console.log(typeof NaN);

console.log(String(23));

// Type coercion
console.log('I am ' + 23 + ' years old!');
console.log('I am ' + '23' + ' years old!');

console.log('24' - '10' - 3);
console.log('24' + '10' + 3);
console.log('24' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);