import { useState } from 'react'

function useCounter(initialCount = 0, step = 1) {
     const [count, setCount] = useState(initialCount);
     const increment = () => setCount((prevCount) => prevCount + step);
     const decrement = () => setCount((prevCount) => prevCount - step);
     const reset = () => setCount(initialCount);
     return [count, increment, decrement, reset]
}

export default useCounter