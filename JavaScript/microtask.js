/**
 * Microtasks expiriment
 */

console.log("========= Start =========");

setTimeout(() => console.log("0 second timer"), 0);

Promise.resolve("Resolved promise 1").then(res => {
  console.log(res);
});

Promise.resolve("Resolved promise 2").then(res => {
  for (let i = 0; i < 100000000; i++) {};
  console.log(res);
});

console.log("========= END =========");