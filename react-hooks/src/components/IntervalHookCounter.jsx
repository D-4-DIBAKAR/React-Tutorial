import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
     const [count, setCount] = useState(0)
     const tick = () => {
          setCount((prevCount) => prevCount + 1)
          //or
          // setCount(count + 1) 
          // //with watch count state in useEffect
     }
     useEffect(() => {
          const interval = setInterval(tick, 1000)
          return () => {
               clearInterval(interval)
          }
     }, [])
     return (
          <div>
               Hook: {count}
          </div>
     )
}

export default IntervalHookCounter