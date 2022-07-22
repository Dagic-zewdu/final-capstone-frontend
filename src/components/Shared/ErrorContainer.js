/* eslint-disable react/prop-types */
import React from 'react';

function ErrorContainer({ error }) {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h4 className="text-danger">
        {error}
      </h4>
    </div>
  );
}

export default ErrorContainer;
