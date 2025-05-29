import React, { Component } from 'react'
import LifeCycleUpdatingB from './LifeCycleUpdatingB'


class LifeCycleUpdatingA extends Component {
     constructor(props) {
          super(props)

          this.state = {
               name: 'Rahul'
          }
          console.log('LifeCycleUpdatingA constructor')
     }
     static getDerivedStateFromProps(props, state) {
          console.log('LifeCycleUpdatingA getDerivedStateFromProps')
          return null
     }
     /*************  ✨ Windsurf Command ⭐  *************/
     /**
      * componentDidMount is invoked immediately after a component is mounted. Initialization
/*******  c671065e-9f1a-4bc3-b31e-0927589b688c  *******/
     componentDidMount() {
          console.log('LifeCycleUpdatingA componentDidMount')
     }
     shouldComponentUpdate(nextProps, nextState) {
          console.log('LifeCycleUpdatingA shouldComponentUpdate')
          return true
     }
     getSnapshotBeforeUpdate(prevProps, prevState) {
          console.log('LifeCycleUpdatingA getSnapshotBeforeUpdate')
          return null
     }
     componentDidUpdate(prevProps, prevState, snapshot) {
          console.log('LifeCycleUpdatingA componentDidUpdate')
     }
     render() {
          console.log('LifeCycleUpdatingA render')
          return (
               <>
                    <div>LifeCycleUpdatingA</div>
                    <button onClick={() => this.setState({ name: 'Rekesh' })}>Change Name</button>
                    <LifeCycleUpdatingB />
               </>
          )
     }
}

export default LifeCycleUpdatingA