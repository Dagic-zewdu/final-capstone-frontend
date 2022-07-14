import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorCycleAsync } from '../../Redux/actions/motorcycle';
import AllContainer from '../Shared/AllContainer';

function Home() {
  const { data, loading, error } = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorCycleAsync());
  }, []);
  return (
    <AllContainer data={data}>
      p
    </AllContainer>
  );
}

export default Home;
