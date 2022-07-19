/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import CyclesSkeleton from '../Skeleton/CyclesSkeleton';
import HomeCardSkeleton from '../Skeleton/HomeCardSkeleton';
import Spinner from './Spinner';

function LoadingContainer({ type = 'spinner' }) {
  return (

    type === 'motorcycles'
      ? <CyclesSkeleton />
      : type === 'homePage'
        ? <HomeCardSkeleton />
        : (
          <div className="d-flex align-items-center justify-content-center">
            <Spinner />
          </div>
        )

  );
}

export default LoadingContainer;
