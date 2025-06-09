import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
     const [searchParams, setSearchParams] = useSearchParams()
     const showActiveUsers = searchParams.get('filter') === 'active'

     return (
          <>
               <h2>Users 1</h2>
               <h2>Users 2</h2>
               <h2>Users 3</h2>
               <Outlet />
               <div>
                    <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                    <button onClick={() => setSearchParams({})}>Reset Filter</button>
               </div>
               {showActiveUsers ? <h3>Showing Active Users</h3> : <h3>Showing All Users</h3>}
          </>
     )
}

export default Users