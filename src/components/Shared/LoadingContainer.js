import React from 'react';
import CyclesSkeleton from '../Skeleton/CyclesSkeleton';
import Spinner from './Spinner';

function LoadingContainer({ type = 'spinner' }) {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      {
      type === 'motorcyles'
        ? <CyclesSkeleton />
        : <Spinner />
     }
    </div>
  );
}

export default LoadingContainer;
