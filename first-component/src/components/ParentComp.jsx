import React, { PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComponentReact from './PureComponentReact'

class ParentComp extends PureComponent {
     /*************  ✨ Windsurf Command ⭐  *************/
     /**
      * Constructor for ParentComp class
      * @param {Object} props - Component props
      */
     /*******  5e9f2e45-754d-403c-af7e-6b28a0b8b7d6  *******/
     constructor(props) {
          super(props)

          this.state = {
               name: 'Rahul'
          }
     }
     componentDidMount() {
          // console.log('Parent Component componentDidMount');
          setInterval(() => {
               this.setState({
                    name: 'Rahul'
               })
          }, 2000)
     }
     render() {
          console.log('Parent Component render');
          return (
               <div>ParentComp
                    <RegularComponent name={this.state.name} />
                    <PureComponentReact name={this.state.name} />
               </div>
          )
     }
}

export default ParentComp