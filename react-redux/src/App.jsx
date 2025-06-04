import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import HookCakeContainer from './components/HookCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'
function App() {


  return (
    <>
      <Provider store={store}>
        {/* <CakeContainer /> */}
        {/* <HookCakeContainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer /> */}
        {/* <NewCakeContainer /> */}
        <UserContainer />
      </Provider>
    </>
  )
}

export default App
