import store from "./app/store.js";
import { ordered, restocked } from "./features/cake/cakeSlice.js";
import { ordered as orderedIceCream, restocked as restockedIceCream } from "./features/iceCream/iceCreamSlice.js";

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
     console.log("Updated state", store.getState());
})

store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(restocked(3));

store.dispatch(orderedIceCream());
store.dispatch(orderedIceCream());
store.dispatch(restockedIceCream(2));

unsubscribe();
