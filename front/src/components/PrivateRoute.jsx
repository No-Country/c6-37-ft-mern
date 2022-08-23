import { Navigate, Outlet, Route } from 'react-router-dom';

const PrivateRoute = ({redirectPath='/login', isAllowed }) => {


  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />; 
  }

  return <Outlet/>;
};

export default PrivateRoute;
