import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

function CyclesSkeleton() {
  return (
    <div className="container d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
      <div className="row w-100 g-0">
        {
     [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
       <div className="col-lg-4" key={key} style={{ minHeight: '300px' }}>
         <div className="card rounded w-100" style={{ height: '100%' }}>
           <Card style={{ width: '100%', height: '100%' }}>
             <Placeholder as={Card.Title} animation="glow" style={{ height: '200px' }}>
               <Placeholder xs={12} style={{ height: '200px' }} />
             </Placeholder>
             <Card.Body>
               <Placeholder as={Card.Title} animation="glow">
                 <Placeholder xs={6} />
               </Placeholder>
               <Placeholder as={Card.Text} animation="glow">
                 <Placeholder xs={7} />
                 {' '}
                 <Placeholder xs={4} />
               </Placeholder>
             </Card.Body>
           </Card>
         </div>
       </div>
     ))
      }
      </div>
    </div>
  );
}

export default CyclesSkeleton;
