/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorCycleAsync } from '../../Redux/actions/motorcycle';
import AllContainer from '../Shared/AllContainer';
import MotorCycleCard from './card';

function Motorcycles() {
  const { data, loading, error } = useSelector((state) => state.motorcycles);
  const { currentUser } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorCycleAsync());
  }, []);
  return (
    <AllContainer loadingType="motorcycles" loading={false} error={false}>
      <div className="container d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
        <div className="row w-100 g-0">
          {
     [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
       <MotorCycleCard key={key} currentUser={currentUser} />
     ))
      }
        </div>
      </div>
    </AllContainer>
  );
}

export default Motorcycles;
