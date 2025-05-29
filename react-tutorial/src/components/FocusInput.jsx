import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
     constructor(props) {
          super(props)

          this.componentRef = React.createRef();
          // Bind the clickHandler in the constructor
          this.clickHandler = this.clickHandler.bind(this);
     }
     clickHandler() {
          this.componentRef.current.focusInput();
     }
     render() {
          return (
               <div>
                    <Input ref={this.componentRef} />
                    <button onClick={this.clickHandler} >Focus Input</button>
               </div>
          )
     }
}

export default FocusInput