// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.mjs';

// console.log('Importing Module!');

// addToCart('Bread', 5);
// console.log(price, tq);

console.log('Importing Module!');
import * as ShoppingCart from './shoppingCart.mjs';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq)

// Optional/avoid - import add, { addToCart, totalPrice as price, tq } from './shoppingCart.mjs';
import add, { cart } from './shoppingCart.mjs';
add('pizza', 3);
add('apples', 10);

// Live connection, imports are not copies of the export, they point to the same place in memory
console.log(cart);