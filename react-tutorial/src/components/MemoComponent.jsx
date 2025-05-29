import React from 'react'

function MemoComponent({ name }) {
     console.log('MemoComponent render');

     return (
          <div>MemoComponent {name}</div>
     )
}

export default React.memo(MemoComponent); //MemoComponent