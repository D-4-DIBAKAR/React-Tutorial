// import { useState } from 'react'
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  // const [count, setCount] = useState(0)

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
      <UserContext.Provider value={'Vishal'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
