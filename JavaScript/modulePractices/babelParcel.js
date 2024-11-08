class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  };
};

const chris = new Person("Chris");

console.log("Chris" ?? null);

const cart = [
  { product: "bread", quantity: 4 },
  { product: "pizza", quantity: 1 },
];

console.log(cart.find(item => item.quantity >= 2));

// May be outdated

import 'core-js/stable'; // polyfilling

import 'regenerator-runtime/runtime' // polyfilling async functions