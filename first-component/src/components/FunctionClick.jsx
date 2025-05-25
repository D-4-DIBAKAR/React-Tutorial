import React from 'react'

const FunctionClick = () => {
     return (
          <div>
               <button onClick={() => alert("Hello")}>Click</button>
          </div>
     )
}
//event should be in camelCase
//in jsx event should be in curly braces
//only pass the function name in onClick not the () 
export default FunctionClick