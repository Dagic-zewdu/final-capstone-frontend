import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import AddMotorCycle from '../components/Motorcycle/AddForm';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/addmotorcycle" element={<AddMotorCycle />} />
    </Routes>
  );
}

export default Router;
