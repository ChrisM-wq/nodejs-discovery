console.log('hello world');

console.log('hello %s', 'world');

console.error(new Error('Whoops, something bad happened'));

const name = 'Chris McHardy';
console.warn(`Danger ${name}! Danger!`);

// ====================

const out = process.stdout;
const err = process.stderr;
const myConsole = new console.Console(out, err);

myConsole.log('hello world');

myConsole.log('hello %s', 'world');

myConsole.error(new Error('Whoops, something bad happened'));

const anotherName = 'Bob Ross';
myConsole.warn(`Danger ${anotherName}! Danger!`);

// ====================

const fs = require('fs');
const { Console } = require('node:console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput });

const count = 5;
logger.log('Count: %d', count);

// ====================

console.assert(true, 'does nothing');
console.assert(false, 'Whoops %s work', 'didn\'t');
console.assert();

// ====================

console.count();
console.count('default');
console.count('abc');
console.count('xyz');
console.count('abc');
console.count();

// ====================

console.count('abc');
console.countReset('abc');
console.count('abc');

// ====================

console.debug('Issue!');

// ====================

const util = require('util');

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  },
  [Symbol('symbolKey')]: 'symbolValue',
  nonEnumerableProp: 'This is hidden'
};

Object.defineProperty(obj, 'nonEnumerableProp', {
  enumerable: false
});

console.log("Without options:");
console.dir(obj); // == console.log(util.inspect(obj))

console.log("\nWith showHidden:");
console.dir(obj, { showHidden: true }); // == console.log(util.inspect(obj, { showHidden: true }))

console.log("\nWith depth = 1:");
console.dir(obj, { depth: 1 }); // == console.log(util.inspect(obj, { depth: 1 }))

console.log("\nWith depth = null (infinite recursion):");
console.dir(obj, { depth: null }); // == console.log(util.inspect(obj, { depth: null }))

console.log("\nWith colors:");
console.dir(obj, { colors: true }); // == console.log(util.inspect(obj, { colors: true }))

// ====================

const code = 5;
console.error('error #%d', code);
console.error('error', code);

// ====================

const label1 = 'label1';
const label2 = 'label2';
const label3 = 'label3';
console.group(label1)
console.group(label2)
console.group(label3)

// ====================

console.groupCollapsed(label1) // Alias for .group
console.groupCollapsed(label2)
console.groupCollapsed(label3)

// ====================

console.groupEnd(label1)
console.group(label1)

// ====================

console.info(label1)

// ====================

console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);

// ====================

console.table(Symbol());

console.table(undefined);

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);

// ====================

console.time('start-timer-label')
console.timeEnd('start-timer-label')

// ====================

console.time('process');
const value = 61; // imagine a fucntion to receive a value
console.timeLog('process', value);
// does another process here with value etc
console.timeEnd('process');

// ====================

console.trace('Show me');