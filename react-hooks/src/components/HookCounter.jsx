import React from 'react'
import { useState } from 'react'

function HookCounter() {
     const [count, setCount] = useState(0)

     const increment = () => {
          setCount(count + 1)
     }

     const decrement = () => {
          setCount(count - 1)
     }
     return (
          <div>
               Hook: {count}
               <div>
                    <button onClick={decrement}>-</button>
                    <button onClick={increment}>+</button>
                    <button onClick={() => setCount(0)}>Reset</button>

               </div>
          </div>
     )
}

export default HookCounter