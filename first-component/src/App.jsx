import './App.css'
import Form from './components/Form'
import Inline from './components/Inline'
import LifeCycleMountingA from './components/LifeCycleMountingA'
import LifeCycleUpdatingA from './components/LifeCycleUpdatingA'
// import ClassClick from './components/ClassClick'
// import Counter from './components/Counter'
// import EventBind from './components/EventBind'
// import FunctionClick from './components/FunctionClick'
// import Greet from './components/Greet'
// import NameList from './components/NameList'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
import Stylesheet from './components/Stylesheet'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Welcome from './components/Welcome'

function App() {


  return (
    <>

      {/*Life Cycle : Mounting*/}
      {/* <LifeCycleMountingA /> */}
      {/*Life Cycle : Updating*/}
      <LifeCycleUpdatingA />
      {/*Form Handling*/}
      {/* <Form /> */}
      {/*Styling*/}
      {/* <Stylesheet />
      <Inline /> */}
      {/*Rendering List  */}
      {/* <NameList /> */}
      {/*Conditional Rendering  */}
      {/* <UserGreeting /> */}
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
