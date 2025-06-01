import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {
     const countContext = useContext(CountContext);
     return (
          <div>ComponentA {countContext.countState}

               <button onClick={() => countContext.countDispatch('decrement')}>-</button>
               <button onClick={() => countContext.countDispatch('increment')}>+</button>
               <button onClick={() => countContext.countDispatch('reset')}>Reset</button>


          </div>
     )
}

export default ComponentA