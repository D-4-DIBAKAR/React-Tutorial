import React, { useReducer } from 'react';

// Initial state as an object
const initialState = {
     firstCounter: 0,
     secondCounter: 10  // Example: More counters if needed
};

// Reducer function
const reducer = (state, action) => {
     switch (action.type) {
          case 'increment':
               return { ...state, firstCounter: state.firstCounter + action.value };
          case 'decrement':
               return { ...state, firstCounter: state.firstCounter - action.value };
          case 'increment2':
               return { ...state, secondCounter: state.secondCounter + action.value };
          case 'decrement2':
               return { ...state, secondCounter: state.secondCounter - action.value };
          case 'reset':
               return initialState;
          default:
               console.warn(`Unhandled action type: ${action.type}`);
               return state;
     }
};

function ReducerHookCounterOne() {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
          <div>
               <h1>First Counter: {state.firstCounter}</h1>
               <h1>Second Counter: {state.secondCounter}</h1>

               <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment First</button>
               <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement First</button>
               <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment  5</button>
               <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
               <div>
                    <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Second</button>
                    <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Second</button>
               </div>
               <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          </div>
     );
}

export default ReducerHookCounterOne;
