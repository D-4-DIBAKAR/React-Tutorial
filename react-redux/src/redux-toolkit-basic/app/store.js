import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice.js'
import iceCreamReducer from '../features/iceCream/iceCreamSlice.js'

const store = configureStore({
     reducer: {
          cake: cakeReducer,
          iceCream: iceCreamReducer
     }
})

export default store
