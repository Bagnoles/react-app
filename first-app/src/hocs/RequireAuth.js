import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';

const RequireAuth = () => {
  const location  = useLocation();
  const auth = useAuth();

  if (!auth.user){
    return <Navigate to={'/login'} state={{ from: location }} />
  }

  return <Outlet />
}

export default RequireAuth;

