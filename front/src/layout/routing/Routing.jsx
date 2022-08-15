import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './../../components/PrivateRoute';
import Landing from './../../pages/landing/Landing';
import NoMatchRoute from './../../pages/noMatchRoute/NoMatchRoute';
import Dashboard from './../../pages/user/dashboard/Dashboard';
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/admin" element={<admin />} /> */}
      </Route>

      <Route path="*" element={<NoMatchRoute />} />
      {/* <PrivateRoute path='/dashboard' element={<NoMatchRoute/>} /> */}

      {/* <Route path='/petshop' component={PetShop} /> */}
      {/* <Route path='/login' component={Login} /> */}
      {/* <Route path='/signUp' component={SignUp} /> */}
      {/* <Route path='*'>
        <NoMatchRoute/>
      </Route> */}
    </Routes>
  );
};

export default Routing;
