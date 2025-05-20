import React from 'react'

// export default function Greet() {
//      return (

//           <h1>Hello Your Name</h1>

//      )
// }

const Greet = ({ name }) => {
     return (
          <h1>Hello {name}</h1>
     )
}

export default Greet