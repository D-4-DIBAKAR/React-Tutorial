import React from 'react'

// export default function Greet() {
//      return (

//           <h1>Hello Your Name</h1>

//      )
// }

const Greet = (props) => {
     console.log(props);

     return (
          <>
               <h1>Hello {props.name}</h1>
               {props.children}
          </>
     )
}

export default Greet