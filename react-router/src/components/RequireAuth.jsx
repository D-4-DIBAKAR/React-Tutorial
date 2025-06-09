import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
     const auth = useAuth();
     if (!auth.user) {
          return <Navigate to='/login' state={{ path: location.pathname }} />;
     }
     return children;
}

export default RequireAuth