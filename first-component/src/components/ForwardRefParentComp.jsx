import React, { Component } from 'react'
import ForwardRefComp from './ForwardRefComp'

class ForwardRefParentComp extends Component {
     constructor(props) {
          super(props)

          this.inputRef = React.createRef();
     }
     clickHandler = () => {
          this.inputRef.current.focus();
     }
     render() {
          return (

               <div>
                    <ForwardRefComp ref={this.inputRef} />
                    <button onClick={this.clickHandler}>Focus Input</button>
               </div>
          )
     }
}

export default ForwardRefParentComp