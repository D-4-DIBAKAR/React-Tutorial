import React from 'react'
import { useState } from 'react'

function HookCounterTwo() {
     const initialCount = 0
     const [count, setCount] = useState(initialCount)

     const incrementFive = () => {
          for (let i = 0; i < 5; i++) {
               setCount(prevCount => prevCount + 1)
          }
     }
     return (
          <div>
               Hook: {count}
               <div>
                    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                    <button onClick={incrementFive}>5</button>
                    <button onClick={() => setCount(initialCount)}>Reset</button>

               </div>
          </div>
     )
}

export default HookCounterTwo