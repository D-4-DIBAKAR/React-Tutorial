import { useParams } from 'react-router-dom'

function UserDetails() {
     const { userId } = useParams()
     // or
     // const params = useParams()
     // const userId = params.userId
     return (
          <div>Details about user {userId}</div>
     )
}

export default UserDetails