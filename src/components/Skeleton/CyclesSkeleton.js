import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

function CyclesSkeleton() {
  return (
    <div className="container">
      <div className="row g-0">
        {
     [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
       <div className="col-lg-4" key={key}>
         <div className="card rounded w-100" style={{ height: '150px' }}>
           <Card style={{ width: '18rem' }}>
             <Placeholder as={Card.Title} animation="glow" style={{ height: '100px' }}>
               <Placeholder xs={12} />
             </Placeholder>
             <Card.Body>
               <Placeholder as={Card.Title} animation="glow">
                 <Placeholder xs={6} />
               </Placeholder>
               <Placeholder as={Card.Text} animation="glow">
                 <Placeholder xs={7} />
                 {' '}
                 <Placeholder xs={4} />
                 {' '}
                 <Placeholder xs={4} />
                 {' '}
                 <Placeholder xs={6} />
                 {' '}
                 <Placeholder xs={8} />
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
