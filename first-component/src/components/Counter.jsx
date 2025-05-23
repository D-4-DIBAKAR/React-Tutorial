import React, { Component } from 'react'

class Counter extends Component {
     constructor() {
          super()
          this.state = {
               count: 0
          }
     }
     increment() {
          this.setState({
               count: this.state.count + 1
          }, () => {
               console.log("Callback value", this.state.count)
          })
          //------------------------------------------------------
          // this.setState((prevState, prevProps) => ({
          //      count: prevState.count + 1
          // }))
          //------------------------------------------------------
          console.log(this.state.count);

          // this.setState(this.state.count + 1)
     }
     incrementFive() {
          this.increment()
          this.increment()
          this.increment()
          this.increment()
          this.increment()
     }
     decrement() {
          if (this.state.count <= 0) {
               return;
          }
          this.setState({
               count: this.state.count - 1
          })

          // this.setState(this.state.count + 1)
     }
     reset() {
          this.setState({
               count: 0
          })
     }
     render() {
          return (<>
               <div>Count : {this.state.count}</div>
               <button onClick={() => this.incrementFive()}>Increment</button>
               <button onClick={() => this.decrement()}>Decrement</button>
               <button onClick={() => this.reset()}>Reset</button>
          </>
          )
     }
}

export default Counter

//setState()
//Always make use of setState and never update the state directly

//this.setState({
//     count: this.state.count + 1
// })

//code has to be executed after the state is updated? Place the code in the callback function which is  the second argument to the setState()

//this.setState((prevState, prevProps) => ({
//     count: prevState.count + 1
// }))

//this.setState({
//     count: this.state.count + 1
// }, () => {
//      console.log("Callback value", this.state.count)
// })

//when you need to update the state based on the previous state or the previous props of the component use the callback function to update the state value of the component 
