import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from '../App'
import { ChannelContext } from '../App'
function ComponentE() {
     const user = useContext(UserContext)
     const channel = useContext(ChannelContext)
     return (
          // <ComponentF />
          <div>
               Component E {user} from {channel}
               {/* <ComponentF /> */}
          </div>
     )
}

export default ComponentE