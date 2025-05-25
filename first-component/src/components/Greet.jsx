import React from 'react'

// export default function Greet() {
//      return (

//           <h1>Hello Your Name</h1>

//      )
// }

const Greet = (props) => {//By destructuring props in function parameter { name, children }
     // console.log({ props });
     const { name, children } = props//Destructuring props in function body

     return (
          <>
               <h1>Hello {name}</h1>
               {children}
          </>
     )
}

export default Greet