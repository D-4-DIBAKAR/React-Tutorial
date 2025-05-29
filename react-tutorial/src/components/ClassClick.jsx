import React, { Component } from 'react'

class ClassClick extends Component {
     clickHandler() {
          alert("Button Clicked")
     }
     render() {
          return (
               <div>
                    <button onClick={this.clickHandler}>Click Me</button>
               </div>
          )
     }
}

export default ClassClick

//event should be in camelCase
//in jsx event should be in curly braces
//only pass the function name in onClick not the ()
//Methods will access using this keyword