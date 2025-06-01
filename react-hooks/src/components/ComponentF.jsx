// import React from 'react'
// // import { UserContext, ChannelContext } from '../App'
// function ComponentF() {
//      return (
//           <div>
//                <UserContext.Consumer>
//                     {user => {
//                          return (<ChannelContext.Consumer>{channel => `Hello ${user} from ${channel}`}
//                          </ChannelContext.Consumer>)
//                     }}
//                </UserContext.Consumer >
//           </div >
//      )
// }

// export default ComponentF


// -------------------------------------------------
import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentF() {
     const countContext = useContext(CountContext);
     return (
          <div>ComponentF {countContext.countState}

               <button onClick={() => countContext.countDispatch('decrement')}>-</button>
               <button onClick={() => countContext.countDispatch('increment')}>+</button>
               <button onClick={() => countContext.countDispatch('reset')}>Reset</button>


          </div>
     )
}

export default ComponentF