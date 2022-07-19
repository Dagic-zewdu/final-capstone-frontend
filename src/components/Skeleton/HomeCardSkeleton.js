import React from 'react';

function HomeCycleSkeleton() {
  return (
    <div className="container d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
      <div className="row w-100 g-0">
        {
            [1, 2, 3, 4, 5, 6].map((key) => (

            ))
        }
        </div>
    </div>
  );
}

export default HomeCycleSkeleton;
