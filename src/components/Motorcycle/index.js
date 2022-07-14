/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorCycleAsync } from '../../Redux/actions/motorcycle';
import AllContainer from '../Shared/AllContainer';
import MotorCycleCard from './card';

function Motorcycles() {
  const { data, loading, error } = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorCycleAsync());
  }, []);
  return (
    <AllContainer data={data} loadingType="motorcycles" loading={loading} error={error}>
      <div className="container d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
        <div className="row w-100 g-0">
          {
            data.map((cycle) => (
              <MotorCycleCard key={cycle?.id} cycle={cycle} />
            ))
          }
        </div>
      </div>
    </AllContainer>
  );
}

export default Motorcycles;
