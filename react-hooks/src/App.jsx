// import { useState,useReducer } from 'react'
import React from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import ClassCounterOne from './components/ClassCounterOne'
import ClassMouse from './components/ClassMouse'
import DataFetching from './components/DataFetching'
import HookCounter from './components/HookCounter'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import HookCounterThree from './components/HookCounterThree'
import HookCounterTwo from './components/HookCounterTwo'
import HookMouse from './components/HookMouse'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import MouseContainer from './components/MouseContainer'
import ComponentE from './components/ComponentE'
import ReducerHookCounter from './components/ReducerHookCounter'
import ReducerHookCounterOne from './components/ReducerHookCounterOne'
import ReducerHookCounterTwo from './components/ReducerHookCounterTwo'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'
import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'
import FocusInput from './components/FocusInput'
import ClassTimer from './components/ClassTimer'
import HookTimer from './components/HookTimer'

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }
export const CountContext = React.createContext();
function App() {
  // const [count, setCount] = useState(0)
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* useState Hook */}
      {/* <ClassCounter /> */}
      {/* <br /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* useEffect Hook */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* useContext Hook */}
      {/* <UserContext.Provider value={'Vishal'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* useReducer Hook */}
      {/* <ReducerHookCounter /> */}
      {/* <ReducerHookCounterOne /> */}
      {/* <ReducerHookCounterTwo /> */}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* useCallback Hook */}
      {/* <ParentComponent /> */}
      {/* useMemo Hook */}
      {/* <Counter /> */}
      {/* useRef Hook */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      <HookTimer />
    </>
  )
}

export default App
