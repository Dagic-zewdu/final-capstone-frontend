/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorCyclesAsync } from '../../Redux/actions/motorcycle';
import responsive from '../../utils/responsive';
import AllContainer from '../Shared/AllContainer';
import HomeCard from './card';
import './styles/index.css';

function Home() {
  const { data, loading, error } = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.length) { dispatch(fetchMotorCyclesAsync()); }
  }, [data]);
  return (
    <AllContainer data={data} loading={loading} error={error}>
      <div className="container h-100 d-flex align-items-center flex-column justify-content-center w-100">
        <h1 className="display-2">Latest models</h1>
        <Carousel
          autoPlay
          className="w-100"
          keyBoardControl
          itemClass="mr-10"
          responsive={responsive([3, 2, 1])}
        >
          {
          data.reverse().map((cycle) => (
            <HomeCard cycle={cycle} key={cycle?.id} />
          ))
      }
        </Carousel>
      </div>
    </AllContainer>
  );
}

export default Home;
