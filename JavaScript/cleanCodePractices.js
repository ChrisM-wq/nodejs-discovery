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

// Restrict additions to object - only freezes first level
const spendingLimits = Object.freeze({
  chris: 1500,
  sasha: 100,
});

spendingLimits.james = 900;

console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "chris"
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'sasha');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? {...entry, flag: 'limit'}
      : entry;
  });
};

const flaggedBudget = checkExpenses(newBudget3, spendingLimits);

console.log(flaggedBudget);

var logBigExpenses = function (state, bigLimit) {
  return state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
};

const loggedBigExpenses = logBigExpenses(flaggedBudget, 1000);
console.log(loggedBigExpenses);