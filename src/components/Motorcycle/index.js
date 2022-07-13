import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorCycleAsync } from '../../Redux/actions/motorcycle';
import AllContainer from '../Shared/AllContainer';

function Motorcycles() {
  const { data, loading, error } = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorCycleAsync());
  }, [data]);
  return (
    <AllContainer loadingType="motorcyles" loading error={error}>
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
