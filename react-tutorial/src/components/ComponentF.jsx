import React, { Component } from 'react'
import UserContext from './userContext'
// import { UserConsumer } from './userContext'
class ComponentF extends Component {
     render() {
          return (
               <UserContext.Consumer>
                    {username => {
                         return <div>Hello {username}</div>
                    }
                    }
               </UserContext.Consumer>
          )
     }
}

export default ComponentF