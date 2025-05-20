import './App.css'
import Greet from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {


  return (
    <>
      <Greet name={"Ram"} />
      <Greet name={"Krishna"} />
      <Greet name={"Bheem"} />
      {/* <Welcome />
      <Hello /> */}
    </>
  )
}

export default App
