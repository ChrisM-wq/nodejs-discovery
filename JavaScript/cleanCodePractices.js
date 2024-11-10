const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'chris' },
  { value: -45, description: 'Groceries 🥑', user: 'chris' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'chris' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'chris' },
  { value: -1100, description: 'New iPhone 📱', user: 'chris' },
  { value: -20, description: 'Candy 🍭', user: 'sasha' },
  { value: -125, description: 'Toys 🚂', user: 'sasha' },
  { value: -1800, description: 'New Laptop 💻', user: 'chir' },
];

const spendingLimits = {
  chris: 1500,
  sasha: 100,
};

const addExpense = function (value, description, user = "chris") {
  let limit = spendingLimits?.[user] ?? 0;
  if (value > limit) {
    console.log("Value exceeds limit!");
    return;
  };
  budget.push({ value: -value, description, user });
};

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'sasha');
addExpense(200, 'Stuff', 'Jay');

console.log(budget);

const checkExpenses = function () {
  for (let entry of budget) {
    let limit = spendingLimits?.[entry.user] || 0;
    if (entry.value < -limit) {
      entry.flag = 'limit';
    };
  };
};

checkExpenses();

console.log(budget);

var bigExpenses = function (bigLimit) {
  let output = '';
  for (let entry of budget) {
    output += entry.value <= -bigLimit ? `${el.description.slice(-2)} / ` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

// const bigExpenses = function (limit) {
//   let output;
//   for (let entry of budget) {

//   }
// };

bigExpenses(1000);