import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './../../components/PrivateRoute';
import Landing from './../../pages/landing/Landing';
import NoMatchRoute from './../../pages/noMatchRoute/NoMatchRoute';
import Dashboard from './../../pages/user/dashboard/Dashboard';
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
import Admin from '../../pages/admin/Admin';
import PetShop from '../../pages/petshop/PetShop';
import useUser from '../../hooks/useUser';

const Routing = () => {
  const { isLogged, isAdmin } = useUser();

  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/petshop" element={<PetShop />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute isAllowed={isLogged & !isAdmin} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<PrivateRoute isAllowed={isAdmin} redirectPath="/" />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<NoMatchRoute />} />
    </Routes>
  );
};

export default Routing;
