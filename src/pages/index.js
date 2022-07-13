import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Motorcycles from '../components/Motorcycle';
import AddMotorCycle from '../components/Motorcycle/AddForm';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/addmotorcycle" element={<AddMotorCycle />} />
      <Route path="/motorcycles" element={<Motorcycles />} />
    </Routes>
  );
}

export default Router;
