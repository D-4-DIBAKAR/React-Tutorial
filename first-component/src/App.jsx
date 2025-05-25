import './App.css'
import ClassClick from './components/ClassClick'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import FunctionClick from './components/FunctionClick'
import Greet from './components/Greet'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Welcome from './components/Welcome'

function App() {


  return (
    <>
      {/*Conditional Rendering  */}
      <UserGreeting />
      {/*Method as Props  */}
      {/* <ParentComponent /> */}
      {/* Event Binding  */}
      {/* <EventBind /> */}
      {/* Event Handling */}
      {/* <FunctionClick />
      <ClassClick /> */}



      {/* <Message /> */}
      {/* <Greet name={"Ram"} >
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name={"Krishna"}>
        <button>Actions</button>
      </Greet>
      <Greet name={"Bheem"} /> */}
      {/* <Welcome />
      <Hello /> */}

      {/* <Counter /> */}
    </>
  )
}

export default App
