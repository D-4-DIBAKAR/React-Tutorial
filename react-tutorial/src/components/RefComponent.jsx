import React, { Component } from 'react'

class RefComponent extends Component {
     constructor(props) {
          super(props)

          this.inputRef = React.createRef();
          //Another Way
          this.cbRef = null;
          this.setCbRef = (element) => {
               this.cbRef = element
          }
     }
     componentDidMount() {
          // this.inputRef.current.focus();
          // console.log(this.inputRef);


          if (this.cbRef) {
               this.cbRef.focus();
          }

     }
     clickHandler = () => {
          // console.log(this.inputRef);
          alert(this.inputRef.current.value)
     }
     render() {
          return (
               <div>
                    <input type="text" name="" id="" ref={this.inputRef} />
                    <input type="text" name="" id="" ref={this.setCbRef} />
                    <button onClick={this.clickHandler}>Focus</button>
               </div>
          )
     }
}

export default RefComponent