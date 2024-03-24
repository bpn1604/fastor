import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';

import Otp from '../Pages/Otp';
import Single from '../Pages/Single';
import Login from '../Pages/Login';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/otp' element={<Otp/>} />
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/single' element = {<Single/>} />
    </Routes>
  )
}

export default AllRoutes