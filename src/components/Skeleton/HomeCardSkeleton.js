import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import responsive from '../../utils/responsive';

function HomeCardSkeleton() {
  return (
    <div className="container m-3 bg-transparent h-100 d-flex align-items-center flex-column justify-content-center w-100">
      <h2 className="display-2 text-uppercase mb-4" style={{ fontFamily: "'Passion One', cursive", letterSpacing: '5px', fontSize: '40px' }}>Latest models</h2>
      <Carousel
        className="w-100"
        keyBoardControl
        itemClass="mr-10"
        responsive={responsive([3, 2, 1])}
      >
        {
        [1, 2, 3, 4, 5, 6].map((item) => (
          <Card className="border-0 bg-transparent rounded w-100" style={{ height: '700px' }} key={item}>
            <div
              className="d-flex align-items-center justify-content-center rounded-circle w-100"
              style={{ height: '400px' }}
            >
              <Placeholder
                as={Card.Title}
                animation="glow"
                style={{ height: '400px', width: '100%', borderRadius: '100px' }}
              >
                <Placeholder xs={12} style={{ height: '400px', borderRadius: '300px' }} />
              </Placeholder>
            </div>
            <Placeholder
              className="text-center mt-3 text-uppercase fa-4x"
              as={Card.Title}
              animation="glow"
              style={{
                color: '#000', fontFamily: "'Passion One', cursive", letterSpacing: '2px', fontSize: '30px',
              }}
            >
              <Placeholder xs={6} />
            </Placeholder>
            <hr style={{ borderTop: '0.5px dashed #eee' }} />
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
          </Card>
        ))
    }
      </Carousel>
    </div>
  );
}

export default HomeCardSkeleton;
