import React from 'react';
import CyclesSkeleton from '../Skeleton/CyclesSkeleton';
import Spinner from './Spinner';

function LoadingContainer({ type = 'spinner' }) {
  return (

    type === 'motorcyles'
      ? <CyclesSkeleton />
      : (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner />
        </div>
      )

  );
}

export default LoadingContainer;
