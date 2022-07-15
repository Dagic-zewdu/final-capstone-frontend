/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMotorCyclesAsync } from '../../Redux/actions/motorcycle';
import AllContainer from '../Shared/AllContainer';
import MotorCycleCard from './card';

function Motorcycles() {
  const { data, loading, error } = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.length) { dispatch(fetchMotorCyclesAsync()); }
  }, []);
  return (
    <AllContainer data={data} loadingType="motorcycles" loading={loading} error={error}>
      <div className="container d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
        <div className="row w-100 g-0">
          {
            data.map((cycle) => (
              <Link to={`/motorcycle/${cycle?.id}`} key={cycle?.id}>
                <MotorCycleCard cycle={cycle} />
              </Link>
            ))
          }
        </div>
      </div>
    </AllContainer>
  );
}

export default Motorcycles;
