import React from 'react'

const ForwardRefComp = React.forwardRef((props, ref) => {
     return (
          <div>
               <input type="text" name="" id="" ref={ref} />
          </div>
     )
})

export default ForwardRefComp