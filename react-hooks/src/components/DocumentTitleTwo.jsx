import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocumentTitleTwo() {
     const [count, setCount] = useState(0)
     useDocumentTitle(count)
     return (
          <div>
               <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
          </div>
     )
}

export default DocumentTitleTwo