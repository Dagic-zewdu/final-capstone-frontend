import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingContainer({ type = 'spinner' }) {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Spinner />
    </div>
  );
}

export default LoadingContainer;
