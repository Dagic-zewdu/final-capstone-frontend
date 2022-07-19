/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <AllContainer data={data} loading={loading} error={error} loadingType="homePage">
      <div className="container m-3 bg-transparent h-100 d-flex align-items-center flex-column justify-content-center w-100">
        <h2 className="display-2 text-uppercase mb-4" style={{ fontFamily: "'Passion One', cursive", letterSpacing: '5px', fontSize: '40px' }}>Latest models</h2>
        <Carousel
          autoPlay
          className="w-100"
          keyBoardControl
          itemClass="mr-10"
          responsive={responsive([3, 2, 1])}
        >
          {
          data.reverse().map((cycle) => (
            <Link to={`/motorcycle/${cycle?.id}`} key={cycle?.id}>
              <HomeCard cycle={cycle} />
            </Link>
          ))
      }
        </Carousel>
      </div>
    </AllContainer>
  );
}

export default Home;
