import { cloneDeep } from "lodash-es";

const state = {
  cart: [
    { product: "bread", quatity: 5 },
    { product: "bread", quatity: 5 }
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone)