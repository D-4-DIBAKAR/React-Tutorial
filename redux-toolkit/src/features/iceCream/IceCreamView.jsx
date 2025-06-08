import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from '../iceCream/iceCreamSlice';

function IceCreamView() {
     const [value, setValue] = useState(1);
     const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
     const dispatch = useDispatch();
     return (
          <div>
               <h2>Number of Ice Cream - {numOfIceCreams}</h2>
               <button onClick={() => dispatch(ordered())}>Order Ice Cream</button><br />
               <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /><br />
               <button onClick={() => dispatch(restocked(Number(value)))}>Restock Ice Creams</button>
          </div>
     )
}

export default IceCreamView