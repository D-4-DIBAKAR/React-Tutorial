import React, { PureComponent } from 'react'

class PureComponentReact extends PureComponent {
     render() {
          console.log('Pure Component React render');

          return (
               <div>Pure Component React {this.props.name}</div>
          )
     }
}

export default PureComponentReact