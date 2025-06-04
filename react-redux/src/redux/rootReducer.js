import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducers from './user/userReducers'

const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer,
     user: userReducers
})

export default rootReducer