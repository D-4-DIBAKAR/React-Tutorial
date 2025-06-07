import { createStore, combineReducers, applyMiddleware } from 'redux';
import pkg from 'redux-logger';
const { createLogger } = pkg;   // Destructure createLogger
//Node
//const redux=require('redux');
//const createStore=redux.createStore
//const reduxLogger=require('redux-logger');
// const logger=reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {//Action Creator
     return {//Action
          type: BUY_CAKE,
          info: "First redux action"
     }
}
function buyIceCream() {
     return {
          type: BUY_ICECREAM,
          info: "Second redux action"
     }
}
//(prevState,action)=> newState

// const initialState = {
//      numOfCakes: 10,
//      numOfIceCreams: 20,
// }
const initialCakeState = {
     numOfCakes: 10,
}
const initialIceCreamState = {

     numOfIceCreams: 20
}
// const reducer = (state = initialState, action) => {
//      switch (action.type) {
//           case BUY_CAKE: return {
//                ...state,
//                numOfCakes: state.numOfCakes - 1
//           }
//           case BUY_ICECREAM: return {
//                ...state,
//                numOfIceCreams: state.numOfIceCreams - 1
//           }
//           default: return state
//      }
// }
const cakeReducer = (state = initialCakeState, action) => {
     switch (action.type) {
          case BUY_CAKE: return {
               ...state,
               numOfCakes: state.numOfCakes - 1
          }

          default: return state
     }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
     switch (action.type) {
          case BUY_ICECREAM: return {
               ...state,
               numOfIceCreams: state.numOfIceCreams - 1
          }
          default: return state
     }
}

// const store = createStore(reducer)
const rootReducer = combineReducers({//Combine Multiple Reducer
     cake: cakeReducer,
     iceCream: iceCreamReducer
})
// const store = createStore(reducer)
// const store = createStore(rootReducer)


// Logger Middleware
const logger = createLogger();

// Create Store with middleware
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() => { });
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe()
