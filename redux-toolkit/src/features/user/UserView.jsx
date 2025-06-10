import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

function UserView() {
     console.log(fetchUsers());

     const dispatch = useDispatch();
     const { loading, users, error } = useSelector(state => state.user);

     useEffect(() => {
          dispatch(fetchUsers());
     }, [dispatch]);  

     return (
          <div>
               <h2>List of Users</h2>

               {loading && <div>Loading...</div>}

               {!loading && error && <div style={{ color: 'red' }}>{error}</div>}

               {!loading && users && users.map((user) => (
                    <div key={user.id} style={{ border: '1px solid gray', padding: '8px', margin: '4px 0' }}>
                         <h3>{user.name}</h3>
                         <p>Email: {user.email}</p>
                         <p>Phone: {user.phone}</p>
                         <p>Website: {user.website}</p>
                    </div>
               ))}
          </div>
     );
}

export default UserView;
