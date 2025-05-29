import React, { Component } from "react";
class Message extends Component {
     constructor() {
          super()
          this.state = {
               message: 'Welcome visitor'
          }
     }
     changeMessage() {
          this.setState({
               message: 'Thank you for subscribing'
          })
     }
     render() {
          return (<>
               <h1>{this.state.message}</h1>
               <button onClick={() => this.changeMessage()}>Subscribe</button>
          </>)
     }
}
export default Message;

/**
 * Props
 * ------
 * Props get passed to the components
 * Function Parameters
 * Props are immutable
 * 
 * props => Functional 
 * this.props => Class Component
 * 
 * 
 * State
 * ------
 * State is managed within the component
 * Variables declared in the function body
 * State can be changed
 * 
 * 
 * useState Hook => Functional Components
 * this.state => Class Components
 */