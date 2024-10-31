const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You WON!!!");
    } else {
      reject("You LOST!!!")
    };
  }, 2000);
});


lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2).then(() => {
  console.log("Waited 2 seconds.");
  return wait(1);
}).then(() => console.log("Waited 1 second."));


wait(5)
  .then(() => {
    console.log("5 seconds passed");
    return wait(2);
  })
  .then(() => {
    console.log("7 seconds passed");
    return wait(2);
  })
  .then(() => {
    console.log("9 seconds passed");
    return wait(2);
  })
  .then(() => {
    console.log("11 seconds passed");
  });

Promise.resolve("ABC").then(res => console.log(res));
Promise.reject("XYZ").catch(err => console.error(err));