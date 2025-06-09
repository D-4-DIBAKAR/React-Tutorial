import React, { useState } from 'react'
import { useAuth } from './Auth';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
     const [user, setUser] = useState('');
     const navigate = useNavigate()
     const location = useLocation();
     const redirectPath = location.state?.path || '/'
     const auth = useAuth()
     const handleLogin = () => {
          auth.login(user);
          navigate(redirectPath, { replace: true })

     }
     return (
          <>
               <div>Login</div>
               <label htmlFor="username">User Name</label>
               <input type="text" name="username" id="username" value={user} onChange={(e) => setUser(e.target.value)} />
               <button onClick={handleLogin} disabled={!user}>Login</button>

          </>
     )
}

export default Login