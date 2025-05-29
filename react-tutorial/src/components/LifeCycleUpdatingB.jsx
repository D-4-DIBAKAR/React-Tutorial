import React, { Component } from 'react'


class LifeCycleUpdatingB extends Component {
     constructor(props) {
          super(props)

          this.state = {
               name: 'Rahul'
          }
          console.log('LifeCycleUpdatingB constructor')
     }
     static getDerivedStateFromProps(props, state) {
          console.log('LifeCycleUpdatingB getDerivedStateFromProps')
          return null
     }
     /*************  ✨ Windsurf Command ⭐  *************/
     /**
      * componentDidMount is invoked immediately after a component is mounted. Initialization
/*******  c671065e-9f1a-4bc3-b31e-0927589b688c  *******/
     componentDidMount() {
          console.log('LifeCycleUpdatingB componentDidMount')
     }
     shouldComponentUpdate(nextProps, nextState) {
          console.log('LifeCycleUpdatingB shouldComponentUpdate')
          return true
     }
     getSnapshotBeforeUpdate(prevProps, prevState) {
          console.log('LifeCycleUpdatingB getSnapshotBeforeUpdate')
          return null
     }
     componentDidUpdate(prevProps, prevState, snapshot) {
          console.log('LifeCycleUpdatingB componentDidUpdate')
     }
     render() {
          console.log('LifeCycleUpdatingB render')
          return (
               <>
                    <div>LifeCycleUpdatingB</div>
               </>
          )
     }
}

export default LifeCycleUpdatingB