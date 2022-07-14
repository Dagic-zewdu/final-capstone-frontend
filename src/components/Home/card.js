/* eslint-disable react/prop-types */
import { generate } from 'randomized-string';
import React from 'react';
import { Card } from 'react-bootstrap';
import getRandomNumberBetween from '../../utils/utils';

const bg = ['bg-info', 'bg-secondary', 'bg-warning'];
function HomeCard({ cycle }) {
  return (
    <Card className="border-none rounded w-100" style={{ height: '500px' }}>
      <div
        className={`d-flex align-items-center justify-content-center rounded-circle w-100 ${bg[getRandomNumberBetween(3)]}`}
        style={{ height: '400px' }}
      >
        <Card.Img
          className="rounded-circle"
          src={cycle?.images[getRandomNumberBetween(cycle?.images.length)]}
          style={{ height: '300px', objectFit: 'cover', opacity: 2 }}
        />
      </div>
      <Card.Title className="text-center fa-4x">{cycle?.title}</Card.Title>
      <hr style={{ borderTop: '0.5px dashed #eee' }} />
      <p className="text-center">{cycle?.description.slice(0, 50)}</p>

    </Card>
  );
}

export default HomeCard;
