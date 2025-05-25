import React, { Component } from 'react'

class UserGreeting extends Component {

     constructor(props) {
          super(props)

          this.state = {
               isLoggedIn: false,
          }
     } render() {
          //let message;
          // if(this.state.isLoggedIn) {
          //      message = <div>Welcome Rahul</div>
          // } else {
          //      message = <div>Welcome Guest</div>           
          // }



          // if(this.state.isLoggedIn) {
          //      return (
          //           <div>
          //                <div>Welcome Rahul</div>
          //           </div>
          //      )
          // } else {
          //      return (
          //           <div>
          //                <div>Welcome Guest</div>
          //           </div>
          //      )
          // }
          return (
               <div>
                    <div>Welcome {this.state.isLoggedIn ? "Rahul" : "Guest"}</div>
               </div>
          )
     }
}

export default UserGreeting