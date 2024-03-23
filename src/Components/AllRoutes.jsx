import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Mobile from '../Pages/Mobile';
import Otp from '../Pages/Otp';
import Single from '../Pages/Single';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Mobile/>} />
        <Route path='/otp' element={<Otp/>} />
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/single' element = {<Single/>} />
    </Routes>
  )
}

export default AllRoutes