import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice.js'
import iceCreamReducer from '../features/iceCream/iceCreamSlice.js'
import userReducer from '../features/user/userSlice.js'
// import pkg from 'redux-logger';
// const { createLogger } = pkg;
// const logger = createLogger();

const store = configureStore({
     reducer: {
          cake: cakeReducer,
          iceCream: iceCreamReducer,
          user: userReducer
     },
     // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
