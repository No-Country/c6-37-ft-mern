import useUser from './../hooks/useUser';
import { Navigate, Outlet, Route } from 'react-router-dom';

const PrivateRoute = ({redirectPath='/login' }) => {
  const { isLogged } = useUser();

  if (!isLogged) {
    return <Navigate to={redirectPath} replace />; 
  }

  return <Outlet/>;
};

export default PrivateRoute;
