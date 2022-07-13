import React from 'react';
import { useSelector } from 'react-redux';
import AllContainer from '../Shared/AllContainer';

function Motorcycles() {
  const { data, loading, error } = useSelector((state) => state.motorcycle);
  return (
    <AllContainer>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-4" />
          <div className="col-lg-4" />
          <div className="col-lg-4" />
        </div>
      </div>
    </AllContainer>
  );
}

export default Motorcycles;
