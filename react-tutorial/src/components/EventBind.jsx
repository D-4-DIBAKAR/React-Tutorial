import React, { Component } from 'react'

class EventBind extends Component {
     constructor(props) {
          super(props)

          this.state = {
               message: 'Hello',
          }
          /*Approach 3 */
          // ,this.clickHandler = this.clickHandler.bind(this)
          //binding in constructor is recommended approach
     }
     // clickHandler() {
     //      this.setState({
     //           message: 'Goodbye'
     //      })
     // }

     /*Approach 4 */
     clickHandler = () => {
          this.setState({
               message: 'Goodbye'
          })
     }//final approach
     //react suggest approach 3 or 4
     render() {
          return (
               <div>{/*Approach 1 */}
                    {/* <button onClick={this.clickHandler.bind(this)}>{this.state.message}</button> */}
                    {/*Approach 2 */}
                    {/* <button onClick={() => this.clickHandler()}>{this.state.message}</button> */}
                    <button onClick={this.clickHandler}>{this.state.message}</button>
               </div>
          )
     }
}

export default EventBind