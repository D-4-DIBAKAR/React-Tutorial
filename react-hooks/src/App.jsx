// import { useState } from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterFour from './components/HookCounterFour'
import HookCounterThree from './components/HookCounterThree'
import HookCounterTwo from './components/HookCounterTwo'

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
      <HookCounterFour />
    </>
  )
}

export default App
