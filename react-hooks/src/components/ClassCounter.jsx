import React, { Component } from 'react'

class ClassCounter extends Component {
     constructor(props) {
          super(props)

          this.state = {
               count: 0
          }
     }
     increment = () => {
          this.setState({
               count: this.state.count + 1
          })
     }
     decrement = () => {
          this.setState({
               count: this.state.count - 1
          })
     }
     render() {
          return (
               <div>
                    Class: {this.state.count}
                    <div>
                         <button onClick={this.decrement}>-</button>
                         <button onClick={this.increment}>+</button>
                         <button onClick={() => this.setState({ count: 0 })}>Reset</button>

                    </div>
               </div>
          )
     }
}

export default ClassCounter