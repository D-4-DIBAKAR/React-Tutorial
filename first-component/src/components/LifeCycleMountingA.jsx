import React, { Component } from 'react'
import LifeCycleB from './LifeCycleMountingB'

class LifeCycleA extends Component {
     constructor(props) {
          super(props)

          this.state = {
               name: 'Rahul'
          }
          console.log('LifeCycleA constructor')
     }
     static getDerivedStateFromProps(props, state) {
          console.log('LifeCycleA getDerivedStateFromProps')
          return null
     }
     /*************  ✨ Windsurf Command ⭐  *************/
     /**
      * componentDidMount is invoked immediately after a component is mounted. Initialization
/*******  c671065e-9f1a-4bc3-b31e-0927589b688c  *******/
     componentDidMount() {
          console.log('LifeCycleA componentDidMount')
     }
     render() {
          console.log('LifeCycleA render')
          return (
               <>
                    <div>LifeCycleA</div>
                    <LifeCycleB />
               </>
          )
     }
}

export default LifeCycleA