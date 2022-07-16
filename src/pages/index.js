import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Motorcycles from '../components/Motorcycle';
import AddMotorCycle from '../components/Motorcycle/AddForm';
import MotorCycleDetails from '../components/Motorcycle/Details';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/motorcycle/:id" element={<MotorCycleDetails />} />
      <Route path="/addmotorcycle" element={<AddMotorCycle />} />
      <Route path="/motorcycles" element={<Motorcycles />} />
    </Routes>
  );
}

export default Router;
