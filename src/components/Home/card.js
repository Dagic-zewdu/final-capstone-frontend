/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import getRandomNumberBetween from '../../utils/utils';

const bg = ['bg-info', 'bg-secondary', 'bg-warning'];
function HomeCard({ cycle }) {
  return (
    <Card className="border-0 bg-transparent rounded w-100" style={{ height: '700px' }}>
      <div
        className={`d-flex align-items-center justify-content-center rounded-circle w-100 ${bg[getRandomNumberBetween(3)]}`}
        style={{ height: '400px' }}
      >
        <Card.Img
          className="rounded-circle w-100"
          src={cycle?.images[getRandomNumberBetween(cycle?.images.length)]}
          style={{ height: '400px', objectFit: 'cover', opacity: 2 }}
        />
      </div>
      <Card.Title
        className="text-center mt-3 text-uppercase fa-4x"
        style={{
          color: '#000', fontFamily: "'Passion One', cursive", letterSpacing: '2px', fontSize: '30px',
        }}
      >
        {cycle?.title}
      </Card.Title>
      <hr style={{ borderTop: '0.5px dashed #eee' }} />
      <p className="text-center mb-5 text-secondary fw-bolder" style={{ fontFamily: "'Rubik', sans-serif", fontSize: '14px',  }}>{cycle?.description.slice(0, 50)}</p>

    </Card>
  );
}

export default HomeCard;
