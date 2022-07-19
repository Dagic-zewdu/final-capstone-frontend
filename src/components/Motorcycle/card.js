/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import responsive from '../../utils/responsive';

function MotorCycleCard({ key, cycle }) {
  const [body, showBody] = useState(false);

  return (
    <div
      className="col-lg-4"
      key={key}
      style={{ minHeight: '350px' }}
      onMouseOver={() => showBody(true)}
      onMouseLeave={() => showBody(false)}
    >
      <div className="card rounded w-100" style={{ height: '100%' }}>
        <Card style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Carousel
            showDots
            keyBoardControl
            className="w-100"
            responsive={responsive([1, 1, 1])}
          >
            {
            cycle?.images.map((image) => (
              <Card.Img
                key={image}
                src={image}
                style={{ height: '350px', objectFit: 'cover' }}
              />
            ))
          }
          </Carousel>
          <Link to={`/motorcycle/${cycle?.id}`} key={cycle?.id}>
            <Card.Body
              className="p-0 w-100"
              style={{
                position: 'absolute',
                backgroundColor: '#111',
                color: '#fff',
                bottom: 0,
                fontFamily: "'Rubik', sans-serif",
                opacity: 0.75,
                display: body ? 'block' : 'none',
                transition: '1s ease',
              }}
            >
              <h3 className="text-center mb-0 text-uppercase fs-3 fw-bolder" style={{ fontFamily: "'Rubik', sans-serif" }}>{cycle?.title}</h3>
              <p className="text-center mb-0" style={{ fontFamily: "'Rubik', sans-serif" }}>{cycle?.model}</p>
              <div
                className="d-flex justify-content-between align-items-center w-100 py-1 px-1"
              >
                <div className="d-flex flex-column justify-content-center m-2">
                  <p className="mb-0 fw-bolder" style={{ fontFamily: "'Rubik', sans-serif" }}>
                    {cycle?.cylinder}
                    {' '}
                    cylinders
                  </p>
                  <p className="fw-bolder" style={{ fontFamily: "'Rubik', sans-serif" }}>{cycle?.acceleration}</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fw-bolder m-2 text-warning" style={{ fontFamily: "'Rubik', sans-serif" }}>
                    $
                    {' '}
                    {cycle?.price}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default MotorCycleCard;
