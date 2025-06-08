import { createSlice } from '@reduxjs/toolkit'

const initialState = { numOfIceCreams: 20 }

const iceCreamSlice = createSlice({
     name: 'icecream',
     initialState,
     reducers: {
          ordered: (state) => { state.numOfIceCreams-- },
          restocked: (state, action) => { state.numOfIceCreams += action.payload }
     },
     extraReducers: (builder) => {
          builder.addCase('cake/ordered', (state) => {
               state.numOfIceCreams--
          })
     }
})

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;



// import { createSlice } from '@reduxjs/toolkit'

// const initialState = { numOfIceCreams: 20 }

// const iceCreamSlice = createSlice({
//      name: 'icecream',
//      initialState,
//      reducers: {
//           ordered: (state) => { state.numOfIceCreams-- },
//           restocked: (state, action) => { state.numOfIceCreams += action.payload }
//      },
//      // extraReducers: (builder) => {
//      //      builder.addCase('cake/ordered', (state) => {
//      //           state.numOfIceCreams--
//      //      })
//      // },
//      extraReducers: {
//           ['cake/ordered']: (state) => {
//                state.numOfIceCreams--
//           }
//      }
// })

// export default iceCreamSlice.reducer;
// export const { ordered, restocked } = iceCreamSlice.actions
