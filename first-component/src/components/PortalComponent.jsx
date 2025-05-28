import React from 'react'
import ReactDOM from 'react-dom'

function PortalComponent() {
     return ReactDOM.createPortal(
          <h1>Portal Component Demo</h1>,
          document.getElementById('portal-root')
     )
}
//ReactDOM.createPortal(<h1>Portal Component Demo</h1>, document.getElementById('portal-root'))
//First Parameter is React Element and Second Parameter is DOM Element
//Used to render React Element on another DOM Element such as : Modal, Tooltip etc
export default PortalComponent